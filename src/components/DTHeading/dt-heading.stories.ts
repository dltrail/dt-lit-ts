import './dt-heading'
import { Meta, StoryObj } from '@storybook/web-components';

interface DtHeadingArgs {
  headingText?: string;
}

const meta:Meta<DtHeadingArgs> ={
  title: 'Example/MyComponent',
  component: 'dt-heading',
    parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    headingText: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta;

export const CustomHeading: StoryObj = {
  args: {
    headingText: 'Built with Storybook',
  },
};