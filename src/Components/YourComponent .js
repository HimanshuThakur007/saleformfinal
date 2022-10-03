import DatalistInput, { useComboboxControls } from 'react-datalist-input';



const YourComponent = () => (
  <DatalistInput
    placeholder="Chocolate"
    label="Select ice cream flavor"
    onSelect={(item) => console.log(item.value)}
    items={[
      { id: 'Chocolate', value: 'Chocolate' },
      { id: 'Coconut', value: 'Coconut' },
      { id: 'Mint', value: 'Mint' },
      { id: 'Strawberry', value: 'Strawberry' },
      { id: 'Vanilla', value: 'Vanilla' },
    ]}
  />
/* <DatalistInput
      value={value}
      setValue={setValue}
      label="Select ice cream flavor"
      showLabel={false}
      items={[...]}
      onSelect={(item) => {
        setValue(''); // Custom behavior: Clear input field once a value has been selected
      }}
    /> */


);

export default YourComponent;