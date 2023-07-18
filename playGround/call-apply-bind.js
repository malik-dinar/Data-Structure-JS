var john = {
    favoriteFood: 'pizza'
  }
  
  var bob = {
    favoriteFood: 'spaghetti'
  }
  
  var favFood = function(eatAction, afterEatAction) {
    console.log('It\'s time to ' + eatAction + ' ' + this.favoriteFood + '! Then ' + afterEatAction + '.')
  }
  
  bob.favFood('scarf down', 'sleep')
  
  // bob.favFood is not a function...
  // Results in error, favFood is not a method on bob
  // In order to user this method for bob, I need to use call or apply
  
  favFood.call(bob, 'scarf down', 'sleep') //It's time to scarf down spaghetti! Then sleep.
  
  favFood.apply(john, ['scarf down', 'sleep']) //It's time to scarf down pizza! Then sleep.
  
  favFood.call(john, ['scarf down', 'sleep']) //It's time to scarf down,sleep pizza! Then undefined.
  
  // Notice this is not what we want, but doesn't hard error out.
  
  // On the other hand, if I invoke apply() without passing the arguments as an array
  
  favFood.apply(bob, 'scarf down', 'sleep') //Uncaught TypeError... hard error

  





var eatThenSomething = favFood.bind(bob)
eatThenSomething('gobble', 'nap') //It's time to gobble spaghetti! Then nap.


// another bind example

const obj  = {
    x: 42,
    getX: function() {
        return this.x;
    }
}

const unBoundX = obj.getX
console.log(unBoundX()); // => undefined

// But to get it to work
const boundX = unBoundX.bind(obj)
console.log(boundX()); // => 42
