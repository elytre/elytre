import { Model } from 'objectmodel';

const Contributor = new Model({
  name: String,
  role: ['Author', 'Translator', 'Cover artist', 'Photographer'],
});

export default Contributor;
