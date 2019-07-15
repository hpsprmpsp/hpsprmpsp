var sc = document.createElement('script');
sc.src = "../src/script_resume.js";
sc.type = "text/javascript";
document.getElementsByTagName('body')[0].appendChild(sc);

var data = {
    pageMeta: {
        title: 'Soumya Padhee\'s resume',
        icon: false,
        jsLibrary: ["https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"],
        cssLibrary: ["https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" ]
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
    social: [
        {
            name : 'linkedin',
            target : "https://www.linkedin.com/in/soumyasarthakpadhee/",
            icon : "fa-linkedin-square",
            tooltip: 'LinkedIn account'
        },
        {
            name : 'github',
            target : "https://github.com/hpsprmpsp",
            icon : "fa-github",
            tooltip: 'GIT account'
        },
        {
            name : 'gmail',
            target: "mailTo:soumya.sarthak.padhee@gmail.com",
            icon : "fa-envelope",
            tooltip : 'Gmail'
        }
    ],
    bodyContent: [{
            type: 'about',
            title: 'About',
            id: 'about',
            content: "A dynamic professional with 6+ years of IT experience in <b>UI Development</b> looking for assignments in the domain of Software Development to deliver solutions for complex technical requirements. "
            
        },
        {
            type: "summary",
            title: "Summary",
            id: 'summary',
            content: [
                {
                    label: "Experiance Summary",
                    cont: [
                        "6+ years of total IT Experience, in <b>UI development</b>",
                        "Worked extensively in designing SPAs using HTML5/CSS3/JavaScript",
                        "Experienced in multiple JavaScript library, AngularJS 1.x, Bootstrap 3, Handlebars, JQuery",
                        "Experienced in designing small web application",
                        "Experienced in Node.js",
                        "Experienced in GIT",
                        "Average experience in Python, PHP",
                        "Average experience in Excel Macro using VBA"
                    ]
                },
                {
                    label: "Roles & Responsibilities",
                    cont: [
                        "Currently working as Member of technical staff",
                        "Accomplished major role in design and implementation of interface for business logic and flow",
                        "Involved in Designed, development and deployment phase of the project",
                        "Involved in design discussion and documentation of the framework",
                        "Involved in Code review",
                        "Worked as an Individual Contributor for the assigned task"
                    ]
                }
            ]


        },
        {
            type: 'timeline',
            title: 'Timeline',
            id: 'timeline',
            content: [
                {
                    time: { "year": "2006" },
                    timelineEvent: 'Graduated from STD-X in Jawahar Navodaya Vidyalay, Belpada',
                    icon: false
                },
                {
                    time: { "year": "2008" },
                    timelineEvent: 'Graduated from STD-XII in DAV Model Sr Secondary School, Jeypore',
                    icon: false
                },
                {
                    time: { "year": "2012" },
                    timelineEvent: 'Completed B.Tech in Electronics and Telecommunications from Veer Surendra Sai University of technology, Burla ',
                    icon: false
                },
                {
                    time: { "date": "12", "month": "9", "year": "2012" },
                    timelineEvent: 'Joined Infosys Pvt. Limited as trainee @Mysore, Karnataka',
                    icon: false
                },
                {
                    time: { "month": "3", "year": "2013" },
                    timelineEvent: 'I was assigned to Project IPE in Infosys SEZ Pvt. Limited, Hyderabad',
                    icon: false
                },
                {
                    time: { "month": "7", "year": "2013" },
                    timelineEvent: 'I started working for VOY in Infosys SEZ Pvt. Limited, Hyderabad',
                    icon: false
                },
                {
                    time: { "date": "6", "month": "11", "year": "2017" },
                    timelineEvent: 'I left Infosys Pvt. Limited after 5 years',
                    icon: false
                },
                {
                    time: { "date": "20", "month": "11", "year": "2017" },
                    timelineEvent: 'Joined Riverbed Technology',
                    icon: false
                },
                {
                    time: { "date": "22", "month": "11", "year": "2017" },
                    timelineEvent: 'I was assigned to SCM in Riverbed Technology',
                    icon: false
                }
                
            ]
        },
        
        {
            type: 'experiance',
            title: "Experiance",
            id: "experiance",
            content: [
                {
                    company : 'Infosys Limited',
                    startTime : { "month":"Sep","year": "2012" },
                    endTime : { "month":"Nov","year": "2017" },
                    projects : [
                        {
                            title : 'IPE',
                            type : 'Maintenance',
                            env : 'HTML5, CSS3. JavaScript, JQuery, Bootstrap, AngularJS 1.6, Unix, Oracle DB,Informatica PowerCentre 9.1',
                            desc : "I was responsible for keeping the environments up for floor management, keeping codes up-to-date. I was responsible for designing UI for automation.",  
                        },
                        {
                            company : 'Infosys Limited',
                            title : 'VOY',
                            startTime : { "month":"Sep","year": "2012" },
                            endTime : { "month":"Nov","year": "2017" },
                            type : 'Internal',
                            env : 'HTML5, CSS3. JavaScript, JQuery, Bootstrap, AngularJS 1.6',
                            desc : "VOY was responsible for organizing different events inside Infosys. I was involved in designing pages for invitations, registration, score maintenance etc. I designed a website using PHP for real-e-state ads.",
                        }
                    ]
                },
                
                {
                    company : 'Riverbed Limited',
                    startTime : { "month":"Nov","year": "2017" },
                    projects : [
                        {
                            title : 'SCM',
                            type : 'Product Developement',
                            env : 'HTML5, CSS3. JavaScript, JQuery, Bootstrap, Handlebars, AngularJS 1.6,Angular, Knockout JS, GIT, Docker',
                            desc : "SCM is a product developed using Handlebars, and Bootstrap, Perl to replace the CLI controller for different hardware.",
                        }
                    ]
                }
            ],

        },
        
        {
            type: "education",
            title: "Education",
            id: 'education',
            content: [
                {
                    degree : 'Bachelor of Engineering',
                    inst : 'Veer Surendra Sai University of Technology, Burla',
                    start: { "year": "2008" },
                    end : {"year":"2012"},
                    major: 'Electronics and Telecommunication',
                    mark : '7.03 CGPA'
                },
                {
                    degree : 'Higher Secondary',
                    inst : 'Central Board of Secondary Education',
                    mark : '78.2%'
                },
                {
                    degree : 'Secondary',
                    inst : 'Central Board of Secondary Education',
                    mark : '81.4%'
                }
            ]


        },
        {
            type: "personalInformation",
            title: "Personal Information",
            id: 'personalInformation',
            content: [
                 
                {
                    label: 'Present Address',
                    content : 'Balagere Rd, Varthur<br > Bengaluru, PIN-560087',
                    
                },
                {
                    label : 'Email',
                    content : 'soumya.sarthak.padhee@gmail.com',
                    type : 'email'
                },
                {
                    label : 'Phone number',
                    content : '+91-9652147435',
                    type : 'phone' 
                    
                },
                
                {
                    label : 'DOB',
                    content : { "date": "12", "month": "07", "year": "1991" },
                    type : 'date'
                },
                {
                    label: 'Marital Status',
                    content: 'Married'
                }

            ]
        }
    ],
    pageFooter: []

};
