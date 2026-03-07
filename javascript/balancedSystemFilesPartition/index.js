function mostBalancedPartition(parent, files_size) {
  const n = parent.length;

  let totalSIze = 0;

  for (let i = 0; i < n; i++) {
    totalSIze += files_size[i];
  }

  const children = Array.from({ length: n }, () => []);

  for (let i = 1; i < n; i++) {
    children[parent[i]].push(i);
  }

  let minDiff = Number.MAX_SAFE_INTEGER;

  function dfs(node) {
    let currentSubtreeSize = files_size[node];
    const myChildren = children[node];

    for (let i = 0; i < myChildren.length; i++) {
      currentSubtreeSize += dfs(myChildren[i]);
    }

    if (node !== 0) {
      const diff = Math.abs(totalSIze - 2 * currentSubtreeSize);
      if (diff < minDiff) {
        minDiff = diff;
      }
    }

    return currentSubtreeSize;
  }

  dfs(0);

  return minDiff;
}
