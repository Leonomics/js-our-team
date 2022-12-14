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

    let card = document.createElement("div");
    container.append(card);
    card.classList.add("card");

    let userPhoto = document.createElement("img");
    userPhoto.src =  "img/" + member.userImage;
    card.append(userPhoto);

    let paragraphWrapper = document.createElement("div");
    card.append(paragraphWrapper);
    paragraphWrapper.classList.add("paragraphWrapper");

    let paragraphName = document.createElement("p");
    paragraphName.innerHTML = member.userName;
    paragraphWrapper.append(paragraphName);

    let paragraphRole = document.createElement("p");
    paragraphRole.innerHTML = member.userRole;
    paragraphWrapper.append(paragraphRole);

    
}



