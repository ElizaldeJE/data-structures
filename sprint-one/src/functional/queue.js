var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0; // last val in current obj
  var next = 0; //first val in current obj
  var length = 0; //size


  // Implement the methods below

  someInstance.enqueue = function(value) {
  	storage[index++] = value;
  	length++;
  };

  someInstance.dequeue = function() {
  	if(length > 0){
  		var result = storage[next];
  		delete storage[next++];
  		length--;
  		return result;
  	}
  };

  someInstance.size = function() {
  	return length;
  };

  return someInstance;
};
