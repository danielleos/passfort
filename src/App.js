// dropdown component
import DropdownSearch from './components/DropdownSearch'

// data
import assignees from './data/assignees.json'

// helpers
import transformData from './helpers/transformData'

// styling
import './App.css'

function App() {
  // format data
  // different helper func should
  const options = transformData(assignees)
  return (
    <div class='App'>
      <div class='App-container'>
        <h3>Dropdown Example</h3>
        <DropdownSearch
          headerText='Assign Item:'  // set header above dropdown
          placeholderText='Select'  // set the placeholder text (pre-selection)
          options={options}  // data to be chosen from
          canSearch  // optional search enablement
          canScroll={options.length > 10 ? true : false}  // if more than 10 options, allow scrolling
        />
      </div>
    </div>
  );
}

export default App
