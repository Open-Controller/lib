[![codecov](https://codecov.io/gh/Open-Controller/opencontroller-lib/branch/master/graph/badge.svg)](https://codecov.io/gh/Open-Controller/opencontroller-lib)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Open-Controller/opencontroller-lib/Publish)](https://github.com/Open-Controller/opencontroller-lib/actions)
[![Github Releases Downloads](https://img.shields.io/github/downloads/Open-Controller/opencontroller-lib/total)](https://github.com/Open-Controller/opencontroller-lib/releases)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/Open-Controller/opencontroller-lib)](https://github.com/Open-Controller/opencontroller-lib/blob/master/package.json)

# opencontroller-lib
A library used to represent Open Controller homes for Open Controller clients.  It is designed to retain all information in JSON form, for portability.

## // structure
```
                                       _______________________
                                       |        Device       |     
House->Room[]->Controller[]->Widget[]->| Action|DynamicValue |
                                       |                     |
                                       -----------------------
```

## // usage
```jsx
 const device = new Device({
       name:"testDevice",
       actions:[
          new HttpAction({
               name:"on",
               method:"GET",
               base:"http://device.ip/",
               path:"turnOn"
           })
       ]
 })
 
 const controller = new Controller({
     name:"Test Controller",
     layout:[
       <Button action={device.getAction("on")} icon="power-on"/>
       //OR
       //new Button({
       //    action:device.getAction("on"),
       //    icon:"power-on"
       //})
    ]
})

const room = new Room({name:"Test Room",controllers:[controller]})
new House({name:"Test House",rooms:[room]})
```

## // building
```bash
yarn
yarn build
```

## // contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests and docs as appropriate.

## // license
[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)
