

let teamMembers = [
    {
        userName: "Wayne Barnett",
        userRole: "Founder & CEO",
        userImage:  "wayne-barnett-founder-ceo.jpg"
    },
    {
        userName: "Angela Caroll",
        userRole: "Chief Editor",
        userImage:  "angela-caroll-chief-editor.jpg"
    },
    {
        userName: "Walter Gordon",
        userRole: "Office Manager",
        userImage:  "walter-gordon-office-manager.jpg"
    },
    {
        userName: "Angela Lopez",
        userRole: "Social Media Manager",
        userImage:  "angela-lopez-social-media-manager.jpg"
    },
    {
        userName: "Scott Estrada",
        userRole: "Developer",
        userImage:  "scott-estrada-developer.jpg"
    },
    {
        userName: "Barbara Ramos",
        userRole: "Graphic Designer",
        userImage:  "barbara-ramos-graphic-designer.jpg"
    }
]

for(let i = 0; i<teamMembers.length; i++){
    const member = teamMembers[i];
    console.log(member);
}