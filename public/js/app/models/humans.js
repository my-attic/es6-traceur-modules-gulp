import Human from './human';

class Humans extends Backbone.Collection {

  constructor (args) {

    console.log("===Humans Collection Constructor===");

    this.model = Human;
    this.url = "/humans";
    super(args)
  }
}

export default Humans;