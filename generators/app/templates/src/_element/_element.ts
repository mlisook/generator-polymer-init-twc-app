import "~bower_components/polymer/polymer-element.html";
import { CustomElement, attr, compute, notify, observe, style, template } from 'twc/polymer';

/**
 * `<%= elementName %>` 
 *
 * @customElement
 * @polymer 
 */
@CustomElement()
<% if (templateLocation == 'inHTML') { %>@template('<%= elementName %>.template.html')
<% } %><% if (templateLocation == 'atTemplate') { %>@template(`<%- templateText %>`)
<% } %>export default class <%= elementClassName %> extends Polymer.Element {
  /**
   * A sample property with a default value
   */
  prop1: string = "<%= elementName %>";
  /**
   * sample computed property
   * illustrates a computed property declaration, using reflect to 
   * attribute and notify.
   */
  @compute((prop1: string) => { return prop1 == "foo"; }) @attr() @notify() fooStatus: boolean;  
  <% if (templateLocation == 'templateFn') { %>
    template() {
        return `<%- templateText %>`;
    }
    <% } %>
    connectedCallback(): void {
      super.connectedCallback();
      // do more stuff
  }

  /**
   * a sample method 
   */
  aSampleMethod(n: number):string {
      return (n + 1).toString();
  }
}