let container = document.getElementById("container");

let teamMembers = [

    member1 = {
        userName: "Wayne Barnett",
        userRole: "Founder & CEO",
        userImage:  "wayne-barnett-founder-ceo.jpg"
    },
    member2 = {
        userName: "Angela Caroll",
        userRole: "Chief Editor",
        userImage:  "angela-caroll-chief-editor.jpg"
    },
    member3 = {
        userName: "Walter Gordon",
        userRole: "Office Manager",
        userImage:  "walter-gordon-office-manager.jpg"
    },
    member4 = {
        userName: "Angela Lopez",
        userRole: "Social Media Manager",
        userImage:  "angela-lopez-social-media-manager.jpg"
    },
    member5 = {
        userName: "Scott Estrada",
        userRole: "Developer",
        userImage:  "scott-estrada-developer.jpg"
    },
    member6 = {
        userName: "Barbara Ramos",
        userRole: "Graphic Designer",
        userImage:  "barbara-ramos-graphic-designer.jpg"
    }
]


for(let i = 0; i<teamMembers.length; i++){
    const member = teamMembers[i];
    console.log(member);
    let paragraph = document.createElement("p");

    paragraph.innerHTML = member.userName + " " + member.userRole;


    container.append(paragraph);

    let userPhoto = document.createElement("img");
    userPhoto.src =  "img/" + member.userImage;
    container.append(userPhoto);
    
}



