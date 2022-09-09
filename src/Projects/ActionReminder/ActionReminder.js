import React from 'react'
import "./ActionReminder.css"


function ActionReminder() {

  return (
    <div className='actionMainContainer'>
      <div className='mainARTitle'>ActionReminder</div>
      <div className='mainARDescription'>
        In this app you are able to create a notifications for yourself at a specific date<br />
        with a custom title and message. When creating notifications you are able to select if you want to fire it<br />
        once or everyday at the selected time.
      </div>
      <div className='mainARContainer'>

        <div className='sectionPRContainer'>
          <div className='sectionPRText'>
            <div className='sectionPRTitle'>Start screen</div>
            <div className='sectionPRDescription'>
              Initial screen when starting the app. Able to change between dark and light
              mode. Animation is created with
              <a className="linkTextPR"
                href='https://reactnative.dev/docs/animated'
                target={"_blank"}>Animated</a>
              from React Native with the useRef hook.
            </div>
          </div>
          <div className='sectionPRGif'>
            <img src={require("../../assets/ActionReminder/startscreen.gif")}
              className="gifStylePR"
            />
          </div>
        </div>

        <div className='sectionPRContainer'>
          <div className='sectionPRText'>
            <div className='sectionPRTitle'>Create reminder</div>
            <div className='sectionPRDescription'>
              You can create custom title and message for your reminder. Uses a
              <a className='linkTextPR'
                href='https://github.com/henninghall/react-native-date-picker'
                target={"_blank"}>Date Picker</a>npm package to select the date.
              When pressing "Confirm" and all sections have been filled, the entered information will
              be used to create a
              <a className='linkTextPR'
                href='https://github.com/zo0r/react-native-push-notification'
                target={"_blank"}>Notification.</a>Here the created notification will also be saved
              as an object inside
              <a className='linkTextPR'
                href='https://github.com/react-native-async-storage/async-storage'
                target={"_blank"}>AsyncStorage</a>with the necessary fields.
            </div>
          </div>
          <div className='sectionPRGif'>
            <img src={require("../../assets/ActionReminder/create.gif")} className="gifStylePR" />
          </div>
        </div>

        <div className='sectionPRContainer'>
          <div className='sectionPRText'>
            <div className='sectionPRTitle'>Enable/Disable and remove</div>
            <div className='sectionPRDescription'>
              Gets data from the local AsyncStorage and saves it in a state. This state is then used as FlatList data
              to render the notifications. When you enable, disable or remove your alarm the state will be updated and then
              pushed to AsyncStorage which will update the FlatList.
            </div>
          </div>
          <div className='sectionPRGif'>
            <img src={require("../../assets/ActionReminder/remove-enable.gif")} className="gifStylePR" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ActionReminder