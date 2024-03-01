import { vi } from "vitest";
import { GNodeStr } from "../graph/graph";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
    start: GNodeStr,
    result: string[] = [],
    visited = new Set([start])): string[] {
  // If start in visited return result
  debugger;
  result.push(start.value);
  // Loop through start.append
  for(const node of start.adjacent){
    // Result = recurse on item with new result/visited
    if(!visited.has(node)) {
      visited.add(node);
      result = rDfs(node, result, visited);
    }
  }
  // Return result
  return result
}
// My Solution slightly changing the starter code.
// function rDfs1(
//     start: GNodeStr,
//     result: string[] = [],
//     visited = new Set<GNodeStr>([])): string[] {
//   // If start in visited return result
//   debugger;
//   if(visited.has(start)) return result;
//   // Add start value to visited and result
//   visited.add(start);
//   result.push(start.value);
//   // Loop through start.append
//   for(const node of start.adjacent){
//     // Result = recurse on item with new result/visited
//     result = rDfs(node, result, visited);
//   }
//   // Return result
//   return result
// }

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: GNodeStr): string[] {
  const visited = new Set([start]);
  const result: string[] = [];
  const stack: GNodeStr[] = [start];

  while(stack.length !== 0) {
    let currentNode = stack.pop()!;
    result.push(currentNode.value);
    for(const node of currentNode.adjacent) {
      if(!visited.has(node)){
        visited.add(node);
        stack.push(node);
      }
    }
  }
  return result;
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: GNodeStr): string[] {
  return ["todo"];
}


export { iDfs, rDfs, bfs };