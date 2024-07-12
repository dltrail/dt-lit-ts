import './dt-heading'

export default {
  title: 'Example/MyComponent',
  argTypes: {
    headingText: {
      control: {
        type: 'text',
      },
    },
  },
};


const Template = (args: any) => {
  const el = document.createElement('dt-heading');
  Object.keys(args).forEach((key) => {
    el[key] = args[key];
  });
  return el;
};

export const Default = Template.bind({});
Default.args = {
  // Default web components properties go here
  headingText: 'testing'
};