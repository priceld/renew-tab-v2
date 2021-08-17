
export enum NodeType {
  Text,
  InlineCode,
  BlockCode,
  List,
  ListItem,
};

type TreeNode = {
  type: NodeType,
  children: TreeNode | string;
};

/**
 * I want to support: bold, italic, inline code, block code, and lists
 */