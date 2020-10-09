import React, { Component } from "react";

import styled from "styled-components";

import UseAnimations from "react-useanimations";
import settings from "react-useanimations/lib/settings";

import { Dropdown, Icon } from "semantic-ui-react";

import { connect } from "react-redux";

import { themeModified } from "../../State/Actions";

const text = "Settings";
const iconSize = 32;
const iconColor = "white";

const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 1.4rem;
  padding-top: 9px;
  grid-column: 3 / 4;

  font-size: 18px;
  font-weight: lighter;
  padding-left: 5px;
`;

const Text = styled.span`
  font-size: 18px;
  font-weight: lighter;
  padding-left: 5px;
`;

const MyDropdown = styled(Dropdown)``;

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {options: [
      {value: '0', text: <span><Icon name=''></Icon>chaos</span>},
      {value: '1', text: <span><Icon name=''></Icon>ambiance</span>},
      {value: '2', text: <span><Icon name=''></Icon>chrome</span>},
      {value: '3', text: <span><Icon name=''></Icon>clouds</span>},
      {value: '4', text: <span><Icon name=''></Icon>clouds_midnight</span>},
      {value: '5', text: <span><Icon name=''></Icon>cobalt</span>},
      {value: '6', text: <span><Icon name=''></Icon>crimson_editor</span>},
      {value: '7', text: <span><Icon name=''></Icon>dawn</span>},
      {value: '8', text: <span><Icon name=''></Icon>dracula</span>},
      {value: '9', text: <span><Icon name=''></Icon>dreamweaver</span>},
      {value: '10', text: <span><Icon name=''></Icon>eclipse</span>},
      {value: '11', text: <span><Icon name=''></Icon>github</span>},
      {value: '12', text: <span><Icon name=''></Icon>gob</span>},
      {value: '13', text: <span><Icon name=''></Icon>gruvbox</span>},
      {value: '14', text: <span><Icon name=''></Icon>idle_fingers</span>},
      {value: '15', text: <span><Icon name=''></Icon>iplastic</span>},
      {value: '16', text: <span><Icon name=''></Icon>katzenmilch</span>},
      {value: '17', text: <span><Icon name=''></Icon>kr_theme</span>},
      {value: '18', text: <span><Icon name=''></Icon>kuroir</span>},
      {value: '19', text: <span><Icon name=''></Icon>merbivore</span>},
      {value: '20', text: <span><Icon name=''></Icon>merbivore_soft</span>},
      {value: '21', text: <span><Icon name=''></Icon>monokai</span>},
      {value: '22', text: <span><Icon name=''></Icon>mono_industrial</span>},
      {value: '23', text: <span><Icon name=''></Icon>nord_dark</span>},
      {value: '24', text: <span><Icon name=''></Icon>pastel_on_dark</span>},
      {value: '25', text: <span><Icon name=''></Icon>solarized_dark</span>},
      {value: '26', text: <span><Icon name=''></Icon>solarized_light</span>},
      {value: '27', text: <span><Icon name=''></Icon>sqlserver</span>},
      {value: '28', text: <span><Icon name=''></Icon>terminal</span>},
      {value: '29', text: <span><Icon name='check'></Icon>textmate</span>},
      {value: '30', text: <span><Icon name=''></Icon>tomorrow</span>},
      {value: '31', text: <span><Icon name=''></Icon>tomorrow_night</span>},
      {value: '32', text: <span><Icon name=''></Icon>tomorrow_night_blue</span>},
      {value: '33', text: <span><Icon name=''></Icon>tomorrow_night_bright</span>},
      {value: '34', text: <span><Icon name=''></Icon>tomorrow_night_eighties</span>},
      {value: '35', text: <span><Icon name=''></Icon>twilight</span>},
      {value: '36', text: <span><Icon name=''></Icon>vibrant_ink</span>},
      {value: '37', text: <span><Icon name=''></Icon>xcode</span>},
      {value: '38', text: <span><Icon name=''></Icon>monokai</span>},
      {value: '39', text: <span><Icon name=''></Icon>textmate</span>},
      {value: '40', text: <span><Icon name=''></Icon>dracula</span>},
      {value: '41', text: <span><Icon name=''></Icon>nord_dark</span>},
    ]}

    this.itemClicked = this.itemClicked.bind(this);
  }

  itemClicked(e, data) {

    console.log(data.value)

    this.state.options.forEach(opt => {
      let newState = this.state.options
      let originalText = newState[opt.value].text.props.children[1]

      if(opt.value === data.value) {
        newState[opt.value].text = <span><Icon name='check' />{originalText}</span>
        this.setState({options: newState})

        // TODO: Set active theme in settings from actions
          // Strip space from start and to lowercase
        this.props.themeModified(originalText)
      } else {
        newState[opt.value].text = <span><Icon name='' />{originalText}</span>
        this.setState({options: newState})
      }
    })

    // for(i = 0; i < this.state.options.length; i++) {
    //   if(data.value == i) {
    //     console.log("Updating active")
    //     this.setState(state => {
    //       console.log(i)
    //       console.log(state[i])
         
    //       // state[i].text = <span><Icon name='check' /> Man</span>

    //       return {
    //         state,
    //       }
    //     }); 
    //   } else {

    //   }
    // }

    
    //console.log(value);
  }

  render() {
    


    return (
      <Container>
        {/* <UseAnimations
          animation={settings}
          size={iconSize}
          strokeColor={iconColor}
        />
        <Text>{text}</Text> */}
        <MyDropdown
          direction="left" 
          className="icon"
          trigger={<span><Icon name='setting'/>Settings</span>} 
        >
          <Dropdown.Menu>
            <Dropdown  defaultValue={'0'} selection onChange={this.itemClicked} options={this.state.options}  selection className="link item ui" icon={null} trigger={<span><Icon name='angle left'/>Theme</span>} >
              {/* <Dropdown.Menu >
                <Dropdown.Item onClick={this.itemClicked} >Electronics</Dropdown.Item>
                <Dropdown.Item >Automotive</Dropdown.Item>
                <Dropdown.Item  >Home</Dropdown.Item>
              </Dropdown.Menu> */}
            </Dropdown>
          </Dropdown.Menu>
        </MyDropdown>
      </Container>
    );
  }
}

export default connect(null, { themeModified })(Settings);