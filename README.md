Created in 6/2022
Live preview : https://mohamed-ahmed10.github.io/EtolvSite/dist
# EtolvSite

This site creatd by Mohamed Ahmed ang this is a description 

1- created by pug for HTML 
2- creates by scss for css 
3- stage contain all preprocessor files



PUG help 
1 - all pug components I convert it as an HTML file to help you if you want it as a sperated file
2 - main language is ARABIC ... so that you will find index.html have an arabic content
3 - Every page I depend on two variavles ( pageTitle && lang )
    >> pageTitle :  to get the title appended with Etolv  ..... Example >>>  Etolv | About
    >> lang : to make a conditions to view arabic content or English 
4- VVIMP :
     - In navbar I make it full dynamically based on two arrays variables { navItems & navItemsAr} 
            1 >>  every array is array of arrays INDEX0 > contains of page title that will display in nav list item 
            &&  INDEX1 > contains of webpage name that will the anchor direct to 
            2 >>  If INDEX0 == INDEX1 not important to put INDEX1
            3 >>  I made a each loop to get the LI content and each page will direct for (AR & EN)  .... Example : LINE 12 in nav.pug file
            4 >>  I made a condition to give an active class if the page title variable(in every pug page) == the item in above array in step of loop ..... Example :  LINE 14 TO LINE 17 in nav.pug file
            5 >>  I put the href of the anchor dynamically by check if item in array found  >>  convert it to lowercase and concatinate "-en.html" IN ENGLISH and ".html" IN ARABIC
            6 >>  upun the NUM 2 & 6 points the only one have two indexes if home page because  >>  PageTitle = Home && link = index 
            7 >>  in language anchor I made a condition and for each loop in main array( arabic array ) if he found item == pageTitle will  get the next index .... Example >>> [["Home","index.html"],["bla" ,"bla"]] will get index.html in home page
                && if not(incase English) it will get value of the same index in another array using the index in loop

            SO THAT :>>> if you want to put or remove anchor to nav
                1 - put in navItems new array contains of strind that Equal the new page title .... Example [["bla"],["bla"],["Newpage"]] .
                2 - put in navItemsAr array of two indexes first_one contains of page title that also eqaul pageTitle and second_one contains of page name  .... Example [["bla","bla"],["bla","bla"],["الصفحة الجديدة " , "new.html"]]
            8 >> files
                1 - components contains all commen components in all pages
                2 - layout containes all head tags and scripts
                3 - helpers contains of repetative elements >> in the components file contains all 


SASS help
1- All classes in snake_case convintion
