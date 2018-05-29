var sc = document.createElement('script');
sc.src = "script.js";
sc.type = "text/javascript";
document.getElementsByTagName('body')[0].appendChild(sc);

var data = {
    pageMeta: {
        title: 'Soumya Padhee\'s resume',
        icon: false,
        jsLibrary: ["https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"],
        cssLibrary: ["https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css", ]
    },

    pageHeader: {
        title: "Soumya Padhee's resume",
        background: "",
        onclick: "window.location.reload()"
    },
    bodyMenu: [

        {
            label: 'About',
            icon: 'glyphicon glyphicon-home',
            src: '#timeline',
            name: 'home_button'

        },
        {
            label: 'Timeline',
            icon: 'glyphicon glyphicon-road',
            src: '#timeline',
            name: 'professional'
        },
        {
            label: 'Experiance',
            icon: 'glyphicon glyphicon-list-alt',
            src: '#experiance',
            name: 'experiance'
        }
    ],
    bodyContent: [{
            type: 'about',
            title: 'About',
            id: 'about',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus ligula quis bibendum eleifend. Sed nec augue at arcu fringilla interdum convallis quis elit. Proin tristique est augue, ac bibendum tellus egestas maximus. Aliquam venenatis ullamcorper quam, a scelerisque metus sollicitudin id. Proin interdum nibh vitae augue hendrerit vestibulum. Maecenas consectetur a nibh at ornare. Aliquam ornare bibendum purus et interdum. Nunc vulputate, erat vel rhoncus facilisis, lectus leo lobortis mi, vitae lobortis nibh sem ac nunc. Nullam fringilla leo eget condimentum tempus. Curabitur suscipit sit amet risus id interdum. Nulla viverra maximus tortor, at faucibus odio pulvinar quis. Proin semper felis eget porttitor malesuada. "
        },
        {
            type: 'timeline',
            title: 'Timeline',
            id: 'timeline',
            content: [{
                    time: { "date": "12", "month": "07", "year": "1991" },
                    timelineEvent: 'Came to this stupid world',
                    icon: false
                },
                {
                    time: { "date": "11", "month": "04", "year": "1998" },
                    timelineEvent: 'Scholarship in STD-III',
                    icon: false
                },
                {
                    time: { "date": "11", "month": "04", "year": "2000" },
                    timelineEvent: 'Scholarship in STD-IV',
                    icon: false
                },
                {
                    time: { "date": "11", "month": "07", "year": "2006" },
                    timelineEvent: 'Garduated from STD-X',
                    icon: false
                },
                {
                    time: { "date": "12", "month": "9", "year": "2012" },
                    timelineEvent: 'Joined Infosys',
                    icon: false
                },
                {
                    time: { "date": "6", "month": "11", "year": "2017" },
                    timelineEvent: 'Left Infosys',
                    icon: false
                },
                {
                    time: { "date": "20", "month": "11", "year": "2017" },
                    timelineEvent: 'Joined Riverbed',
                    icon: false
                },
                {
                    time: false,
                    timelineEvent: 'tatti kha batman',
                    icon: false
                }
            ]
        },
        {
            type: 'experiance',
            title: "Experiance",
            id: "experiance",
            content: "experiance details in string format"
        },
        {
            type: "skill",
            title: "Skillset",
            id: 'skillset',
            content: []


        },
        {
            type: "personalInformation",
            title: "Personal Information",
            id: 'personalInformation',
            content: []
        }
    ],
    pageFooter: []

};
