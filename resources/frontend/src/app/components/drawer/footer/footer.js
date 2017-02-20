import ComponentMixin from './../../../mixins/component';
import ElementMixin from './../../../mixins/element';
import SlotMixin from './../../../mixins/slot';

export default {
  /**
   * The name of the component
   */
  name: 'drawer-footer',

  /**
   * The element name of the component.
   */
  element: 'footer',

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    ComponentMixin,
    ElementMixin,
    SlotMixin,
  ],
};
