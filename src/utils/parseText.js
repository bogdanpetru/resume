import React from 'react';
/**
 * transforms *text* into <b>text</b>
 */

const findMatchesIndexes = (text) => {
  const regex = /\*/g;
  let m;
  const matchesIndexes = [];

  while ((m = regex.exec(text)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    matchesIndexes.push(m.index);
  }

  return matchesIndexes;
}

const groupIndexes = (list) => {
  return list.reduce((acc, item) => {
    if (acc[acc.length - 1].length === 2) {
      acc.push([]);
    }
    acc[acc.length - 1].push(item);
    return acc;
  }, [[]]);
}

export default (text) => {
  // group on sets of two, split string and add b
  const indexes = findMatchesIndexes(text);
  const groups = groupIndexes(indexes);

  if (indexes.length === 0) {
    return text;
  }

  const groupLength = groups.length;

  return groups.reduce((acc, [start, end], index) => {
    let isLast = index === groupLength - 1;
    if (index === 0) {
      acc.push(text.slice(0, start));
    }

    acc.push(
      <b>{text.slice(start + 1, end)}</b>
    );

    if (isLast) {
      acc.push(text.slice(end + 1));
    }

    if (!isLast) {
      acc.push(
        text.slice(end + 1, groups[index + 1][0])
      );
    }

    return acc;
  }, []);
};