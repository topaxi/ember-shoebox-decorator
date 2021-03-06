import { getOwner } from '@ember/application';
import { get } from '@ember/object';
import { resolve } from 'rsvp';

export function shoeboxModelDecorator(f) {
  let initial = true;
  let { value: original } = f.descriptor;

  f.descriptor.value = function shoeboxModel() {
    if (!initial) return original.apply(this, arguments);

    let shoeboxName = `route-${this.routeName}__${f.key}`;
    let fastbootService = getOwner(this).lookup('service:fastboot');
    let shoebox = get(fastbootService, 'shoebox');
    if (get(fastbootService, 'isFastBoot')) {
      return resolve(original.apply(this, arguments)).then(data => {
        shoebox.put(shoeboxName, data);
        return data;
      });
    }

    initial = false;
    let data = shoebox.retrieve(shoeboxName);

    if (!data) return original.apply(this, arguments);

    return data;
  };

  return f;
}
