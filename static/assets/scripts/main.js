// Get all tab links and tab bodies
const tabLinks = document.querySelectorAll('.tab-link');
const tabBodies = document.querySelectorAll('.tab-body');
const ideasBtnModal = document.querySelector('.ideas-btn-modal');

// Add click event listeners to tab links
tabLinks.forEach((tabLink, index) => {
  tabLink.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all tab links and tab bodies
    tabLinks.forEach((link) => link.classList.remove('active'));
    tabBodies.forEach((body) => body.classList.remove('active'));

    // Add active class to the clicked tab link and corresponding tab body
    tabLink.classList.add('active');
    tabBodies[index].classList.add('active');

    if (tabLink.classList.contains('active') && tabLink.classList.contains('tab-link-ideas')) {
      ideasBtnModal.innerHTML = "Add Idea";
      ideasBtnModal.dataset.id = "modal-idea"
    } else {
      ideasBtnModal.innerHTML = "Add Bug";
      ideasBtnModal.dataset.id = "modal-bug"
    }

  });
});

// filter modal open

const btnModapOpen = document.querySelectorAll(".btn-modal__open");
const modalWrapFilter = document.querySelector(".modal-wrap-filter");
const btnModalClose = document.querySelector(".btn-modal__close");

btnModapOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalWrapFilter.classList.remove("hidden");
  });
});

btnModalClose.addEventListener("click", () => {
  modalWrapFilter.classList.add("hidden");
});

// cancel modal open

const btnCancel = document.querySelectorAll(".btn-cancel");
const modalCancel = document.querySelector(".modal-cancel");
const btnCancelClose = document.querySelector(".btn-cancel__close");

btnCancel.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalCancel.classList.remove("hidden");
  });
});

btnCancelClose.addEventListener("click", () => {
  modalCancel.classList.add("hidden");
});

// form for idea / bug in modal open

const btnAddModapOpen = document.querySelector(".btn-add-modal__open");
const modalWrapIdeasBugs = document.querySelectorAll(".modal-wrap-ideas-bugs");
const btnsIdeaModalClose = document.querySelectorAll(".btn-idea-modal__close");

if (btnAddModapOpen) {

  btnAddModapOpen.addEventListener("click", () => {

    modalWrapIdeasBugs.forEach((modal) => {

      if (ideasBtnModal.dataset.id === modal.dataset.modal) {
        modal.classList.remove("hidden");
      } else {
        modal.classList.add("hidden");
      }

    })
  });

}

btnsIdeaModalClose.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalWrapIdeasBugs.forEach((modal) => {
      modal.classList.add("hidden");
    })
  });
});

// video popup open

const videoBtnsOpen = document.querySelectorAll(".btn-video__open");
const modalWrap = document.querySelector(".modal-wrap");
const modalWrapCloseBtn = document.querySelector(".btn-video__close");

modalWrap.querySelector("iframe").src = "";

videoBtnsOpen.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalWrap.classList.remove("hidden");
    modalWrap.querySelector("iframe").src = btn.dataset.video;
  });
});

modalWrapCloseBtn.addEventListener("click", () => {
  modalWrap.classList.add("hidden");
});

// skills popup open

const skillsBtnOpen = document.querySelector(".skills-modal__open");
const modalWrapSkills = document.querySelector(".modal-wrap__skills");
const modalSkillsCloseBtn = document.querySelector(".btn-skills__close");

if (skillsBtnOpen) {
  skillsBtnOpen.addEventListener("click", () => {
    modalWrapSkills.classList.remove("hidden");
    console.log(modalWrapSkills)
  });
}

modalSkillsCloseBtn.addEventListener("click", () => {
  modalWrapSkills.classList.add("hidden");
});

// product tree functionality

const nestedTableNames = document.querySelectorAll(".nested-item__label-icon");

nestedTableNames.forEach((item) => {
  item.addEventListener("click", () => {
    const child = item.closest(".nested-item__label").nextElementSibling;
    child.classList.toggle("hidden");

    const categoryOpenBtn = item.querySelector(".category-open-btn");
    const categoryCloseBtn = item.querySelector(".category-close-btn");

    if (child.classList.contains("hidden")) {
      categoryCloseBtn.classList.remove("hidden");
      categoryOpenBtn.classList.add("hidden");
    } else {
      categoryCloseBtn.classList.add("hidden");
      categoryOpenBtn.classList.remove("hidden");
    }
  });
});

// functionality for open mobile menu

const menuWrap = document.querySelector(".menu-wrap");
const menuOverlay = document.querySelector(".menu-overlay");
const openMenuButton = document.querySelector(".btn-open-menu");
const closeMenuButton = document.querySelector(".btn-close-menu");
const body = document.body;

function openMobileMenu() {
  menuWrap.classList.add("menu-open");
  body.classList.add("overflow-hidden");
}

function closeMobileMenu() {
  menuWrap.classList.remove("menu-open");
  body.classList.remove("overflow-hidden");
}

openMenuButton.addEventListener("click", openMobileMenu);
closeMenuButton.addEventListener("click", closeMobileMenu);
menuOverlay.addEventListener("click", closeMobileMenu);

// setup for select

const selectControlRefSortedBy = document.querySelector('#control-ref_sortedBy');
const selectControlRefPriority = document.querySelector('#control-ref_priority');
const selectControlRefCategories = document.querySelector('#control-ref_categories');
const selectControlRefTags = document.querySelector('#control-ref_tags');
const selectControlRefStatuses = document.querySelector('#control-ref_statuses');
const selectPriority = document.querySelector('#priority');

const choicesSortedBy = new Choices(selectControlRefSortedBy, {

});
const choicesPriority = new Choices(selectControlRefPriority, {
  placeholder: true,
  removeItems: true,
  removeItemButton: true,
});
const choicesCategories = new Choices(selectControlRefCategories, {
  placeholder: true,
  removeItems: true,
  removeItemButton: true,
});
const choicesTags = new Choices(selectControlRefTags, {
  placeholder: true,
  removeItems: true,
  removeItemButton: true,
});
const choicesStatuses = new Choices(selectControlRefStatuses, {
  placeholder: true,
  removeItems: true,
  removeItemButton: true,
});
const choicesSelectPriority = new Choices(selectPriority, {
  placeholder: true,
  removeItems: true,
  removeItemButton: true,
});

// options for multiselect tree

const options = [
  {
    name: 'Account management',
    value: 1,
    children: [
      {
        name: 'Sign up',
        value: 2,
        children: []
      },
      {
        name: 'User onboarding',
        value: 3,
        children: []
      },
      {
        name: 'Profile',
        value: 4,
        children: [
          {
            name: 'Personal details',
            value: 5,
            children: []
          },
          {
            name: 'Contributions',
            value: 6,
            children: []
          },
          {
            name: 'Status',
            value: 7,
            children: []
          },
        ]
      }
    ]
  },
  {
    name: 'Product management',
    value: 8,
    children: [
      {
        name: "Create and manage product",
        value: 9,
        children: []
      },
      {
        name: "Discover work",
        value: 10,
        children: []
      },
      {
        name: "Product summary",
        value: 11,
        children: []
      },
      {
        name: "Product Tree",
        value: 12,
        children: [
          {
            name: "Capabilities",
            value: 13,
            children: []
          }
        ]
      },
      {
        name: "Initiatives",
        value: 14,
        children: []
      },
      {
        name: "Task",
        value: 15,
        children: [
          {
            name: "Task claim",
            value: 16,
            children: [
              {
                name: "Request a task claim",
                value: 17,
                children: []
              },
              {
                name: "Withdraw task claim (Quit task)",
                value: 18,
                children: []
              },
              {
                name: "Review task claim",
                value: 19,
                children: [
                  {
                    name: "Accept task claim request",
                    value: 20,
                    children: []
                  },
                  {
                    name: "Reject task claim request",
                    value: 21,
                    children: []
                  }
                ]
              }
            ]
          },
          {
            name: "Contribution",
            value: 22,
            children: [
              {
                name: "Submit contibution",
                value: 23,
                children: []
              },
              {
                name: "Review contribution",
                value: 24,
                children: [
                  {
                    name: "Accept contribution",
                    value: 25,
                    children: []
                  },
                  {
                    name: "Reject contribution",
                    value: 26,
                    children: []
                  }
                ]
              },
              {
                name: "Delivery Message",
                value: 27,
                children: []
              }
            ]
          },
          {
            name: "Contribution destination",
            value: 28,
            children: []
          },
          {
            name: "Comments",
            value: 29,
            children: [
              {
                name: "Submit comment",
                value: 30,
                children: []
              },
              {
                name: "Mention user",
                value: 31,
                children: []
              },
              {
                name: "Update comment",
                value: 32,
                children: []
              },
              {
                name: "Delete comment",
                value: 33,
                children: []
              }
            ]
          },
          {
            name: "Task management",
            value: 34,
            children: []
          }
        ]
      },
      {
        name: "Product Setting",
        value: 35,
        children: [
          {
            name: "Product visibility (public / private)",
            value: 36,
            children: []
          },
          {
            name: "Policies",
            value: 37,
            children: [
              {
                name: "Set / Update Contribution License Agreement",
                value: 38,
                children: []
              }
            ]
          }
        ]
      },
      {
        name: "Product People",
        value: 39,
        children: []
      },
      {
        name: "Ideas & Bugs",
        value: 40,
        children: []
      },
      {
        name: "Guidelines",
        value: 41,
        children: [
          {
            name: "Contributing guidelines",
            value: 42,
            children: []
          }
        ]
      },
      {
        name: "Legal",
        value: 43,
        children: [
          {
            name: "Product license",
            value: 44,
            children: []
          },
          {
            name: "Contributor License Agreement (CLA)",
            value: 45,
            children: []
          }
        ]
      }
    ]
  }
]

const optionsExpertise = [
  { "id": 1, "selectable": false, "name": "tools", "parent_id": null, "skill_id": 92 },
  { "id": 2, "selectable": true, "name": "figma", "parent_id": 1, "skill_id": 92 },
  { "id": 3, "selectable": false, "name": "activities", "parent_id": null, "skill_id": 93 },
  { "id": 4, "selectable": true, "name": "interviews", "parent_id": 3, "skill_id": 93 },
  { "id": 5, "selectable": false, "name": "tools", "parent_id": null, "skill_id": 94 },
  { "id": 6, "selectable": true, "name": "figma", "parent_id": 5, "skill_id": 94 },
  { "id": 7, "selectable": true, "name": "adobe xd", "parent_id": 5, "skill_id": 94 },
  { "id": 8, "selectable": true, "name": "invision", "parent_id": 5, "skill_id": 94 },
  { "id": 9, "selectable": false, "name": "design-systems", "parent_id": null, "skill_id": 94 },
  { "id": 10, "selectable": true, "name": "ant-design", "parent_id": 9, "skill_id": 94 },
  { "id": 11, "selectable": true, "name": "material-design", "parent_id": 9, "skill_id": 94 },
  { "id": 12, "selectable": false, "name": "python ecosystem", "parent_id": null, "skill_id": 97 },
  { "id": 13, "selectable": true, "name": "django", "parent_id": 12, "skill_id": 97 },
  { "id": 14, "selectable": true, "name": "flask", "parent_id": 12, "skill_id": 97 },
  { "id": 15, "selectable": false, "name": "java ecosystem", "parent_id": null, "skill_id": 97 },
  { "id": 16, "selectable": true, "name": "java", "parent_id": 15, "skill_id": 97 },
  { "id": 17, "selectable": true, "name": "spring-boot", "parent_id": 15, "skill_id": 97 },
  { "id": 18, "selectable": false, "name": "languages", "parent_id": null, "skill_id": 97 },
  { "id": 19, "selectable": true, "name": "golang", "parent_id": 18, "skill_id": 97 },
  { "id": 20, "selectable": true, "name": "python", "parent_id": 18, "skill_id": 97 },
  { "id": 21, "selectable": true, "name": "java", "parent_id": 18, "skill_id": 97 },
  { "id": 22, "selectable": false, "name": "libraries", "parent_id": null, "skill_id": 105 },
  { "id": 23, "selectable": true, "name": "react", "parent_id": 22, "skill_id": 105 },
  { "id": 24, "selectable": true, "name": "redux", "parent_id": 22, "skill_id": 105 },
  { "id": 25, "selectable": true, "name": "vue", "parent_id": 22, "skill_id": 105 },
  { "id": 26, "selectable": false, "name": "languages", "parent_id": null, "skill_id": 105 },
  { "id": 27, "selectable": true, "name": "javascript", "parent_id": 26, "skill_id": 105 },
  { "id": 28, "selectable": true, "name": "typescript", "parent_id": 26, "skill_id": 105 },
  { "id": 29, "selectable": false, "name": "technologies", "parent_id": null, "skill_id": 105 },
  { "id": 30, "selectable": true, "name": "graphql", "parent_id": 29, "skill_id": 105 },
  { "id": 31, "selectable": true, "name": "rest", "parent_id": 29, "skill_id": 105 },
  { "id": 32, "selectable": false, "name": "frameworks", "parent_id": null, "skill_id": 106 },
  { "id": 33, "selectable": true, "name": "django", "parent_id": 32, "skill_id": 106 },
  { "id": 34, "selectable": false, "name": "frameworks", "parent_id": null, "skill_id": 114 },
  { "id": 35, "selectable": true, "name": "cypress", "parent_id": 34, "skill_id": 114 }
]

const optionsSkills = [
  {"id":1,"active":false,"selectable":false,"name":"Art & Creative","parent_id":null}, 
 {"id":2,"active":false,"selectable":false,"name":"2D Animation","parent_id":1}, 
 {"id":3,"active":false,"selectable":false,"name":"Acting","parent_id":1}, 
 {"id":4,"active":false,"selectable":false,"name":"AR/VR Design","parent_id":1}, 
 {"id":5,"active":false,"selectable":false,"name":"Art Direction","parent_id":1}, 
 {"id":6,"active":false,"selectable":false,"name":"Audio Editing","parent_id":1}, 
 {"id":7,"active":false,"selectable":false,"name":"Audio Production","parent_id":1}, 
 {"id":8,"active":false,"selectable":false,"name":"Brand Design","parent_id":1}, 
 {"id":9,"active":false,"selectable":false,"name":"Caricatures & Portraits","parent_id":1}, 
 {"id":10,"active":false,"selectable":false,"name":"Cartoons & Comics","parent_id":1}, 
 {"id":11,"active":false,"selectable":false,"name":"Creative Direction","parent_id":1}, 
 {"id":12,"active":false,"selectable":false,"name":"Editorial Design","parent_id":1}, 
 {"id":13,"active":false,"selectable":false,"name":"Game Art","parent_id":1}, 
 {"id":14,"active":false,"selectable":false,"name":"Local Photography","parent_id":1}, 
 {"id":15,"active":false,"selectable":false,"name":"Motion Graphics","parent_id":1}, 
 {"id":16,"active":false,"selectable":false,"name":"Image Editing","parent_id":1}, 
 {"id":17,"active":false,"selectable":false,"name":"Music Composition","parent_id":1}, 
 {"id":18,"active":false,"selectable":false,"name":"Music Production","parent_id":1}, 
 {"id":19,"active":false,"selectable":false,"name":"Musician","parent_id":1}, 
 {"id":20,"active":false,"selectable":false,"name":"Packaging Design","parent_id":1}, 
 {"id":21,"active":false,"selectable":false,"name":"Pattern Design","parent_id":1}, 
 {"id":22,"active":false,"selectable":false,"name":"Presentation Design","parent_id":1}, 
 {"id":23,"active":false,"selectable":false,"name":"Product & Industrial Design","parent_id":1}, 
 {"id":24,"active":false,"selectable":false,"name":"Product Photography","parent_id":1}, 
 {"id":25,"active":false,"selectable":false,"name":"Video Editing","parent_id":1}, 
 {"id":26,"active":false,"selectable":false,"name":"Video Production","parent_id":1}, 
 {"id":27,"active":false,"selectable":false,"name":"3D Animation","parent_id":1}, 
 {"id":28,"active":false,"selectable":false,"name":"Videography","parent_id":1}, 
 {"id":29,"active":false,"selectable":false,"name":"Visual Effects","parent_id":1}, 
 {"id":30,"active":false,"selectable":false,"name":"Customer Service & Support","parent_id":null}, 
 {"id":31,"active":false,"selectable":false,"name":"Customer Service","parent_id":30}, 
 {"id":32,"active":false,"selectable":false,"name":"Tech Support","parent_id":30}, 
 {"id":33,"active":false,"selectable":false,"name":"Data Science & Analytics","parent_id":null}, 
 {"id":34,"active":false,"selectable":false,"name":"Data Analytics","parent_id":33}, 
 {"id":35,"active":false,"selectable":false,"name":"Data Engineering","parent_id":33}, 
 {"id":36,"active":false,"selectable":false,"name":"Data Extraction","parent_id":33}, 
 {"id":37,"active":false,"selectable":false,"name":"Data Mining","parent_id":33}, 
 {"id":38,"active":false,"selectable":false,"name":"Data Processing","parent_id":33}, 
 {"id":39,"active":false,"selectable":false,"name":"Data Visualization","parent_id":33}, 
 {"id":40,"active":false,"selectable":false,"name":"Deep Learning","parent_id":33}, 
 {"id":41,"active":false,"selectable":false,"name":"Experimentation & Testing","parent_id":33}, 
 {"id":42,"active":false,"selectable":false,"name":"Knowledge Representation","parent_id":33}, 
 {"id":43,"active":false,"selectable":false,"name":"Machine Learning","parent_id":33}, 
 {"id":44,"active":false,"selectable":false,"name":"Engineering, Science & Building","parent_id":null}, 
 {"id":45,"active":false,"selectable":false,"name":"3D Modelling & Rendering","parent_id":44}, 
 {"id":46,"active":false,"selectable":false,"name":"Building Information Modelling","parent_id":44}, 
 {"id":47,"active":false,"selectable":false,"name":"Mathematics","parent_id":44}, 
 {"id":48,"active":false,"selectable":false,"name":"Sourcing & Procurement","parent_id":44}, 
 {"id":49,"active":false,"selectable":false,"name":"General Support","parent_id":null}, 
 {"id":50,"active":false,"selectable":false,"name":"Accounting & Finance","parent_id":49}, 
 {"id":51,"active":false,"selectable":false,"name":"Legal Support","parent_id":49}, 
 {"id":52,"active":false,"selectable":false,"name":"Project Management","parent_id":49}, 
 {"id":53,"active":false,"selectable":false,"name":"Agile Coach","parent_id":49}, 
 {"id":54,"active":true,"selectable":false,"name":"Information Systems & Networking","parent_id":null}, 
 {"id":55,"active":false,"selectable":false,"name":"Business Applications Development","parent_id":54}, 
 {"id":56,"active":true,"selectable":true,"name":"Cloud Engineering","parent_id":54}, 
 {"id":57,"active":false,"selectable":false,"name":"Database Administration","parent_id":54}, 
 {"id":58,"active":true,"selectable":true,"name":"DevOps Engineering","parent_id":54}, 
 {"id":59,"active":true,"selectable":true,"name":"Information Security","parent_id":54}, 
 {"id":60,"active":false,"selectable":false,"name":"IT Compliance","parent_id":54}, 
 {"id":61,"active":false,"selectable":false,"name":"IT Support","parent_id":54}, 
 {"id":62,"active":false,"selectable":false,"name":"Network Administration","parent_id":54}, 
 {"id":63,"active":false,"selectable":false,"name":"Network Security","parent_id":54}, 
 {"id":64,"active":true,"selectable":true,"name":"Solutions Architecture","parent_id":54}, 
 {"id":65,"active":false,"selectable":false,"name":"Systems Administration","parent_id":54}, 
 {"id":66,"active":false,"selectable":false,"name":"Systems Engineering","parent_id":54}, 
 {"id":67,"active":false,"selectable":false,"name":"Marketing, Sales & Communications","parent_id":null}, 
 {"id":68,"active":false,"selectable":false,"name":"Brand Strategy","parent_id":67}, 
 {"id":69,"active":false,"selectable":false,"name":"Campaign Management","parent_id":67}, 
 {"id":70,"active":false,"selectable":false,"name":"Community Management","parent_id":67}, 
 {"id":71,"active":false,"selectable":false,"name":"Content Strategy","parent_id":67}, 
 {"id":72,"active":false,"selectable":false,"name":"Digital Marketing","parent_id":67}, 
 {"id":73,"active":false,"selectable":false,"name":"Email Marketing","parent_id":67}, 
 {"id":74,"active":false,"selectable":false,"name":"Lead Generation","parent_id":67}, 
 {"id":75,"active":false,"selectable":false,"name":"Market Research","parent_id":67}, 
 {"id":76,"active":false,"selectable":false,"name":"Marketing Automation","parent_id":67}, 
 {"id":77,"active":false,"selectable":false,"name":"Marketing Strategy","parent_id":67}, 
 {"id":78,"active":false,"selectable":false,"name":"Public relations","parent_id":67}, 
 {"id":79,"active":false,"selectable":false,"name":"Sales & Business Development","parent_id":67}, 
 {"id":80,"active":false,"selectable":false,"name":"Search Engine Marketing","parent_id":67}, 
 {"id":81,"active":false,"selectable":false,"name":"Search Engine Optimisation","parent_id":67}, 
 {"id":82,"active":false,"selectable":false,"name":"Social Media Marketing","parent_id":67}, 
 {"id":83,"active":false,"selectable":false,"name":"Social Media Strategy","parent_id":67}, 
 {"id":84,"active":false,"selectable":false,"name":"Telemarketing","parent_id":67}, 
 {"id":85,"active":true,"selectable":false,"name":"Product, User Experience & Research","parent_id":null}, 
 {"id":86,"active":true,"selectable":true,"name":"Business Analysis","parent_id":85}, 
 {"id":87,"active":true,"selectable":true,"name":"Graphic Design","parent_id":85}, 
 {"id":88,"active":false,"selectable":false,"name":"Illustration","parent_id":85}, 
 {"id":89,"active":false,"selectable":false,"name":"Initiative Management","parent_id":85}, 
 {"id":90,"active":false,"selectable":false,"name":"Logo Design","parent_id":85}, 
 {"id":91,"active":true,"selectable":true,"name":"Product Management","parent_id":85}, 
 {"id":92,"active":true,"selectable":true,"name":"UI Mockups","parent_id":85}, 
 {"id":93,"active":true,"selectable":true,"name":"User Research","parent_id":85}, 
 {"id":94,"active":true,"selectable":true,"name":"UX/UI Design","parent_id":85}, 
 {"id":95,"active":true,"selectable":false,"name":"Software Development (inc. Web, Mobile)","parent_id":null}, 
 {"id":96,"active":false,"selectable":false,"name":"AR/VR Development","parent_id":95}, 
 {"id":97,"active":true,"selectable":true,"name":"Backend Development","parent_id":95}, 
 {"id":98,"active":false,"selectable":false,"name":"Blockchain Development","parent_id":95}, 
 {"id":99,"active":false,"selectable":false,"name":"CMS Development","parent_id":95}, 
 {"id":100,"active":false,"selectable":false,"name":"Database Development","parent_id":95}, 
 {"id":101,"active":false,"selectable":false,"name":"Desktop Software Development","parent_id":95}, 
 {"id":102,"active":false,"selectable":false,"name":"E-commerce Development","parent_id":95}, 
 {"id":103,"active":false,"selectable":false,"name":"Emerging Tech","parent_id":95}, 
 {"id":104,"active":false,"selectable":false,"name":"Firmware Development","parent_id":95}, 
 {"id":105,"active":true,"selectable":true,"name":"Frontend Development","parent_id":95}, 
 {"id":106,"active":true,"selectable":true,"name":"Full-stack Development","parent_id":95}, 
 {"id":107,"active":false,"selectable":false,"name":"Game Development","parent_id":95}, 
 {"id":108,"active":false,"selectable":false,"name":"Manual Testing","parent_id":95}, 
 {"id":109,"active":false,"selectable":false,"name":"Mobile App Development","parent_id":95}, 
 {"id":110,"active":false,"selectable":false,"name":"Mobile Design","parent_id":95}, 
 {"id":111,"active":false,"selectable":false,"name":"Mobile Game Development","parent_id":95}, 
 {"id":112,"active":false,"selectable":false,"name":"Prototyping","parent_id":95}, 
 {"id":113,"active":false,"selectable":false,"name":"Scripting & Automation","parent_id":95}, 
 {"id":114,"active":true,"selectable":true,"name":"Test Automation","parent_id":95}, 
 {"id":115,"active":false,"selectable":false,"name":"Web Design","parent_id":95}, 
 {"id":116,"active":false,"selectable":false,"name":"Translation","parent_id":null}, 
 {"id":117,"active":false,"selectable":false,"name":"General Language Translation","parent_id":116}, 
 {"id":118,"active":false,"selectable":false,"name":"Language Localisation","parent_id":116}, 
 {"id":119,"active":false,"selectable":false,"name":"Language Tutoring","parent_id":116}, 
 {"id":120,"active":false,"selectable":false,"name":"Legal Translation","parent_id":116}, 
 {"id":121,"active":false,"selectable":false,"name":"Technical Translation","parent_id":116}, 
 {"id":122,"active":false,"selectable":false,"name":"Business Writing","parent_id":116}, 
 {"id":123,"active":false,"selectable":false,"name":"Writing","parent_id":null}, 
 {"id":124,"active":false,"selectable":false,"name":"Content Writing","parent_id":123}, 
 {"id":125,"active":false,"selectable":false,"name":"Copywriting","parent_id":123}, 
 {"id":126,"active":false,"selectable":false,"name":"Creative Writing","parent_id":123}, 
 {"id":127,"active":false,"selectable":false,"name":"Editing & Proofreading","parent_id":123}, 
 {"id":128,"active":false,"selectable":false,"name":"Ghostwriting","parent_id":123}, 
 {"id":129,"active":false,"selectable":false,"name":"Grant Writing","parent_id":123}, 
 {"id":130,"active":false,"selectable":false,"name":"Scriptwriting","parent_id":123}, 
 {"id":131,"active":false,"selectable":false,"name":"Technical Writing","parent_id":123}
]

function mapOptionsExpertiseToOptions(optionsExpertise) {
  const newOptions = [];

  optionsExpertise.forEach(expertiseOption => {
    const { id, name, parent_id } = expertiseOption;
    
    // Find the parent option based on parent_id
    const parentOption = newOptions.find(option => option.value === parent_id);

    // Create the new option object
    const newOption = {
      name,
      value: id,
      children: []
    };

    // If parentOption exists, add the new option to its children array
    if (parentOption) {
      parentOption.children.push(newOption);
    } else {
      // If parentOption doesn't exist, add the new option to the top-level newOptions array
      newOptions.push(newOption);
    }
  });

  return newOptions;
}

const domElementsSkills = document.querySelectorAll('.treeselect-skills')

domElementsSkills.forEach((domElement) => {

  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [],
    options: mapOptionsExpertiseToOptions(optionsSkills),
  })

  treeselect.srcElement.addEventListener('input', (e) => {
    console.log('Selected value:', e.detail)
  });

});

const domElementsExpertise = document.querySelectorAll('.treeselect-expertise')

domElementsExpertise.forEach((domElement) => {

  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [],
    options: mapOptionsExpertiseToOptions(optionsExpertise),
  })

  treeselect.srcElement.addEventListener('input', (e) => {
    console.log('Selected value:', e.detail)
  });

});

const domElements = document.querySelectorAll('.treeselect-demo')

domElements.forEach((domElement) => {

  const treeselect = new Treeselect({
    parentHtmlContainer: domElement,
    value: [],
    options: options,
  })

  treeselect.srcElement.addEventListener('input', (e) => {
    console.log('Selected value:', e.detail)
  });

});

// for challenges steps

const stepNumbs = document.querySelectorAll('[data-step-numb]');
const stepForms = document.querySelectorAll('[data-step-id]');
const stepCurrent = document.querySelector('[data-current-step');
const stepNext = document.querySelector('[data-step-next]');
const stepPrevious = document.querySelector('[data-step-previous]');
const changeStepEdit = document.querySelector('#change-step-edit');
const publishBtn = document.querySelector('#publish-btn');

function changeStep(currentStep) {

  stepCurrent.dataset.currentStep = Number(currentStep);

  stepNumbs.forEach((numb) => {

    if (Number(numb.dataset.stepNumb) === currentStep) {
      numb.classList.add('active');
    } else {
      numb.classList.remove('active');
    }
  });

  stepForms.forEach((form) => {

    if (Number(form.dataset.stepId) === currentStep) {
      form.classList.add('active');
    } else {
      form.classList.remove('active');
    }
  });

  if (currentStep === 1) {
    stepPrevious.classList.add('hidden');
  } else {
    stepPrevious.classList.remove('hidden');
  };

  if (currentStep === 5) {
    stepNext.classList.add('hidden');
    publishBtn.classList.remove('hidden');
  } else {
    stepNext.classList.remove('hidden');
    publishBtn.classList.add('hidden');
  };

}

changeStepEdit.addEventListener('click', () => {

  changeStep(2);

})

stepNext.addEventListener('click', () => {

  if (Number(stepCurrent.dataset.currentStep) === 5) {
    return;
  }

  changeStep(Number(stepCurrent.dataset.currentStep) + 1);

});

stepPrevious.addEventListener('click', () => {

  if (Number(stepCurrent.dataset.currentStep) === 1) {
    return;
  }

  changeStep(Number(stepCurrent.dataset.currentStep) - 1);

});

