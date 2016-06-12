// reverse a LinkedList
/*
 ex. 3->2->1 returns 1->2->3
 fyi Every LinkedList has a head and a tail
*/

var reverseLinkedList = function (list){
  var prev = null;
  var node = list.head;
  var save;
  while (node){
    save = node.next;
    node.next = prev;
    prev = node;
    node = save;
  }
  return prev;
}
