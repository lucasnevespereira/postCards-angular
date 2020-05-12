# PostCards

Project to understand data communication between parent and child components.

#### Setting up `@Input` Binding (Communication from a parent to child component)

- Step 1 - In the parent component template, find where we create the child component.
- Step 2 - Decide on the property name that we want to use to communicate from the parent to the child.
- Step 3 - Add new binding to the child component, specifying the data we want to pass down.
- Step 4 - In the child components class file (ts file), add an input property. This tells the component to expect the parent to provide the value for this property.
- Step 5 - In the child components template file, reference that input property.
