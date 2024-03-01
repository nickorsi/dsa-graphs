/** Graph Node class. */

class GNodeStr {
  value: string;
  adjacent: Set<GNodeStr>;

  constructor(value: string, adjacent = new Set<GNodeStr>()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

/** Undirected graph. */

class GraphStr {
  nodes: Set<GNodeStr>;

  constructor() {
    this.nodes = new Set();
  }

  /** Add node to graph. */
  addNode(node: GNodeStr): void {
    this.nodes.add(node)
  }

  /** Add array of nodes to graph. */
  addNodes(nodeArray: GNodeStr[]): void {
    for(const node of nodeArray) {
      this.nodes.add(node);
    }
  }

  /** Add edge between v1 and v2. */
  addEdge(v1: GNodeStr, v2: GNodeStr): void {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** Remove edge between v1 and v2. */
  removeEdge(v1: GNodeStr, v2: GNodeStr): void {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** Remove node from graph. */
  removeNode(node: GNodeStr): void {
    this.nodes.delete(node);
  }
}

export { GNodeStr, GraphStr };