# SimpleStyle
World's simplest web UI layout framework. This provides the key dom classes which should be used to build a responsive website as fast as possible.

### How to use it:
Please put the below lines in head. 
`
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/dipankar08/SimpleStyle/simplestyle.css" /> <<< NOT WORKING ANY MOTE
        
        <link rel="stylesheet" type="text/css" href="https://raw.githack.com/dipankar08/SimpleStyle/master/simplestyle.css" />
        <script src="https://cdn.jsdelivr.net/gh/dipankar08/SimpleStyle/simplestyle.js"></script>
`


### Supported features. 
Below table shows a list of features which is used to build a responsive website. 

| Componnet | CSS class | Description
| --- | --- |---|
| resposive  | .container | will proviide resposive size, please put this on body or section. 
| layouts | .gridBlock, oneByOne, .oenByTwo, .oneByThree, .twoByThree, .oneByFour | you can create multiple grid based on the size.
|Item List| ul.inlineList,  ul.inlineList.oneColumn,ul.inlineList.twoColumn | you can create item list using ul and li with onecolumn, two collom|
| Text Styleing| p.heroText, .sectionHeading, .sectionSubHeading, .itemHeading, .paragraph, .price | All the text should be wrapper in a p and use the multiple class to have diffrenet text size.|
| Box | .box, .box.active, .box.active.shadow | This will help you to create box with border, show active box or show shadow |
| Spacing| .gap_m, .gap_l, .gap_xl, .gap_xxl | Provides vertical gapping betweeen two section or components |
| alignment|  .textCenter , .textLeft, .textRight, .alignMiddle | provide multiple text alignment |
| forms | .inputForm| provide styleing for your input builds just adding one tap on top |
| buttons | .btn, .btn.primary, .btn.primary.shadow | primary, secondary and shadow button style |
| Color scheme | .colorScheme, .invertColor | support default blue color schem, where invertColor is used for dardk backgrouds   simple.  |
| Notification | .notify.error, .notify.success, .notify.info | provides the style for noticfication |

### Examples
Here are some example which is built using this style.
http://dipankar.co.in/apps/interview/index.html





