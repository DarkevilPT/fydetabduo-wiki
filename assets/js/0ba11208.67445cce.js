"use strict";(self.webpackChunkfydetab_wiki=self.webpackChunkfydetab_wiki||[]).push([[122],{3425:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=n(4848),i=n(8453);const s={id:"flashing_the_fydetab_duo",title:"\u26a1\ufe0f Flashing the Fydetab Duo"},a=void 0,r={id:"flashing_the_fydetab_duo",title:"\u26a1\ufe0f Flashing the Fydetab Duo",description:"Here is a step-by-step guide for flashing a new OS onto your Fydetab Duo.",source:"@site/docs/3.Flashing the Fydetab Duo.md",sourceDirName:".",slug:"/flashing_the_fydetab_duo",permalink:"/flashing_the_fydetab_duo",draft:!1,unlisted:!1,editUrl:"https://github.com/FydeOS/fydetabduo-wiki/tree/main/docs/3.Flashing the Fydetab Duo.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"flashing_the_fydetab_duo",title:"\u26a1\ufe0f Flashing the Fydetab Duo"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbb Operating system options",permalink:"/operating_system_options"},next:{title:"\ud83d\udee0\ufe0f Hacking your Fydetab Duo",permalink:"/hacking_your_fydetab_duo"}},d={},l=[{value:"To make Fydetab Duo boot into Loader Mode",id:"to-make-fydetab-duo-boot-into-loader-mode",level:2},{value:"1. Prepare Your Device",id:"1-prepare-your-device",level:3},{value:"2. Enter Loader/Maskrom Mode",id:"2-enter-loadermaskrom-mode",level:3},{value:"3. Check the Status",id:"3-check-the-status",level:3},{value:"4. Enter Maskrom mode in case of brick",id:"4-enter-maskrom-mode-in-case-of-brick",level:3},{value:"Utilising the image flash tool provided by Rockchip",id:"utilising-the-image-flash-tool-provided-by-rockchip",level:2},{value:"Using Linux",id:"using-linux",level:3},{value:"Using macOS",id:"using-macos",level:3},{value:"Using Windows",id:"using-windows",level:3}];function h(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"Here is a step-by-step guide for flashing a new OS onto your Fydetab Duo."}),"\n",(0,t.jsx)(o.h2,{id:"to-make-fydetab-duo-boot-into-loader-mode",children:"To make Fydetab Duo boot into Loader Mode"}),"\n",(0,t.jsx)(o.h3,{id:"1-prepare-your-device",children:"1. Prepare Your Device"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Connect your Fydetab Duo to the computer you'll use for the OS flash.","\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"Due to an oversight by our factory supplier, the Type-C cable that comes with the fydetab doesn\u2019t support data transfer, so you won\u2019t be able to get into Loader mode with it. Please use a different Type-C cable that can handle data transfers."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.li,{children:"Ensure the device is powered off before proceeding. If it powers on automatically, turn it off again to avoid unintended operations."}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"2-enter-loadermaskrom-mode",children:"2. Enter Loader/Maskrom Mode"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Step 1:"})," Press and hold the volume up (vol+) button."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Step 2:"})," While holding the vol+ button, briefly press the power button for 0.5 to 1 second."]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Step 3:"})," Release both buttons simultaneously (Note: If releasing the buttons simultaneously does not work, it is better to release the power button and afterwards the vol+ button)."]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"3-check-the-status",children:"3. Check the Status"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"If successful, your flashing device should be able to connect to the Fydetab Duo.The device\u2019s LED will remain off, and the screen will stay completely dark."}),"\n",(0,t.jsx)(o.li,{children:"Occasionally, the screen may display an image indicating that the device is in Loader Mode. Note that this image may not always appear due to display issues."}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"4-enter-maskrom-mode-in-case-of-brick",children:"4. Enter Maskrom mode in case of brick"}),"\n",(0,t.jsx)(o.p,{children:"If for some reason an unsupported image has been flashed or something has been corrupted making it impossible to access Loader/Maskrom mode with the button combination explained in step 2, there is the possibility to use the Maskrom button on the Fydetab's PCB."}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:n(2408).A+"",width:"1280",height:"721"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Force a shutdown by pressing and holding the power button for 10 seconds."}),"\n",(0,t.jsx)(o.li,{children:"Press and hold MASKROM mode button from the PCB. While holding down the button connect the USB from the tablet to the PC."}),"\n",(0,t.jsx)(o.li,{children:"Open the flashing tool from the next section and you will see that a device is detected in MASKROM mode."}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"utilising-the-image-flash-tool-provided-by-rockchip",children:"Utilising the image flash tool provided by Rockchip"}),"\n",(0,t.jsx)(o.h3,{id:"using-linux",children:"Using Linux"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Clone or download the flash tools from our GitHub repository ",(0,t.jsx)(o.a,{href:"https://github.com/openFyde/foundation-rk3588/tree/main/rk3588-image-maker",children:"here"}),"."]}),"\n",(0,t.jsx)(o.li,{children:"Unarchive the downloaded update image using your favourite tool."}),"\n",(0,t.jsxs)(o.li,{children:["Fire up a terminal session and issue the following commands:","\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"cd foundation-rk3588/rk3588-image-maker\nsudo ./Linux_Upgrade_Tool/upgrade_tool uf <filename of the update image>.img\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"using-macos",children:"Using macOS"}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsx)(o.p,{children:"Require macOS > 10.15"}),"\n"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["Download the upgrade tools ",(0,t.jsx)(o.a,{href:"https://download.fydeos.io/utils/upgrade_tool_v2.3_mac.zip",children:"here"}),"."]}),"\n",(0,t.jsx)(o.li,{children:"Unarchive the downloaded update image file using your favourite tool."}),"\n",(0,t.jsxs)(o.li,{children:["Fire up a terminal session and issue the following commands:","\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"chmod +x upgrade_tool\nsudo ./upgrade_tool uf <filename of the update image>.img\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"using-windows",children:"Using Windows"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Download and install the ",(0,t.jsx)(o.a,{href:"https://dl.radxa.com/tools/windows/DriverAssitant_v5.0.zip",children:"Rockchip Driver"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Download the tool ",(0,t.jsx)(o.a,{href:"https://download.fydeos.io/utils/windows_RKDevTool_Release_v2.92.zip",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["It's a GUI tool, so it's pretty self-explanatory. For detailed instructions, ",(0,t.jsx)(o.a,{href:"https://wiki.radxa.com/Android/android_tool",children:"here"})," and ",(0,t.jsx)(o.a,{href:"https://opensource.rock-chips.com/wiki_AndroidTool",children:"here"})," are good references."]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"To flash the official images use the second tab of the software"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:n(53).A+"",width:"596",height:"451"})})]})}function c(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},53:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/flashing_official_imges_windows-12614ec6c3743aa624bc87e6a0622ba9.png"},2408:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/fydetab_maskrom_button_pcb-6859a59f6d57c611a9b2c81868a44778.jpg"},8453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>r});var t=n(6540);const i={},s=t.createContext(i);function a(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);