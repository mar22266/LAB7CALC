import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    value: { control: 'text' },
    className: { control: 'text' }
  }
};

const Template = (args) => <Button {...args} />;

export const Button1 = Template.bind({});
Button1.args = {
  value: '1',
  className: 'button'
};

export const Button2 = Template.bind({});
Button2.args = {
  value: '2',
  className: 'button'
};

export const Button3 = Template.bind({});
Button3.args = {
  value: '3',
  className: 'button'
};

export const Button4 = Template.bind({});
Button4.args = {
  value: '4',
  className: 'button'
};

export const Button5 = Template.bind({});
Button5.args = {
  value: '5',
  className: 'button'
};

export const Button6 = Template.bind({});
Button6.args = {
  value: '6',
  className: 'button'
};

export const Button7 = Template.bind({});
Button7.args = {
  value: '7',
  className: 'button'
};

export const Button8 = Template.bind({});
Button8.args = {
  value: '8',
  className: 'button'
};

export const Button9 = Template.bind({});
Button9.args = {
  value: '9',
  className: 'button'
};

export const Button0 = Template.bind({});
Button0.args = {
  value: '0',
  className: 'button cero'
};

export const ButtonDot = Template.bind({});
ButtonDot.args = {
  value: '.',
  className: 'button'
};

export const OperatorAdd = Template.bind({});
OperatorAdd.args = {
  value: '+',
  className: 'button operator'
};

export const OperatorSubtract = Template.bind({});
OperatorSubtract.args = {
  value: '-',
  className: 'button operator'
};

export const OperatorMultiply = Template.bind({});
OperatorMultiply.args = {
  value: '*',
  className: 'button operator'
};

export const OperatorDivide = Template.bind({});
OperatorDivide.args = {
  value: '/',
  className: 'button operator'
};

export const Clear = Template.bind({});
Clear.args = {
  value: 'C',
  className: 'button clear'
};

export const Equal = Template.bind({});
Equal.args = {
  value: '=',
  className: 'button equal'
};
