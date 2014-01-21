test("containsChar", function(){
  deepEqual(containsChar("mouse", "u"), true, "The letter U should be in mouse.");
  deepEqual(containsChar("mouse", "z"), false, "The letter Z should not be in mouse.");

});


