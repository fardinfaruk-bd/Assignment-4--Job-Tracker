
let interviewList = [];
let rejectedList = [];
let jobStatus = "all";



let total = document.getElementById("total")
let interviewCount = document.getElementById("interviewCount")
let rejectedCount = document.getElementById("rejectedCount")
let totalJob = document.querySelector(".totalJob")

const allJobs = document.getElementById("all-job-list")
const mainContainer = document.querySelector('main')


const filteredSection = document.getElementById("filtered-section")
const allFilterBtn = document.getElementById("all-filter-btn")
const interviewFilterBtn = document.getElementById("interview-filter-btn")
const rejectedFilterBtn = document.getElementById("rejected-filter-btn")


// Update Count function
function updateCounts() {
    if (jobStatus === "all") {
    totalJob.innerText = allJobs.children.length;
    } 
    else if (jobStatus === "interview") {
        totalJob.innerText = interviewList.length;
    } 
    else if (jobStatus === "rejected") {
        totalJob.innerText = rejectedList.length;
    }

    total.innerText = allJobs.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
updateCounts();


// No Job Section Show/hide Function
function noJobs(){
    const noJobsSection = document.getElementById("no-jobs-section");

  if (
    (jobStatus === "all" && allJobs.children.length === 0) ||
    (jobStatus === "interview" && interviewList.length === 0) ||
    (jobStatus === "rejected" && rejectedList.length === 0)
  ) {
    noJobsSection.classList.remove("hidden");
  } 
  else {
    noJobsSection.classList.add("hidden");
  }
}

//Toggle Function
function toggle(id) {
    allFilterBtn.classList.remove("text-white", "bg-[#3B82F6]");
    interviewFilterBtn.classList.remove("text-white", "bg-[#3B82F6]");
    rejectedFilterBtn.classList.remove("text-white", "bg-[#3B82F6]");


    allFilterBtn.classList.add("text-[#64748B]", "bg-white");
    interviewFilterBtn.classList.add("text-[#64748B]", "bg-white");
    rejectedFilterBtn.classList.add("text-[#64748B]", "bg-white");


    const selectedBtn = document.getElementById(id);
    jobStatus = id
    selectedBtn.classList.remove("text-[#64748B]", "bg-white");
    selectedBtn.classList.add("bg-[#3B82F6]", "text-white");


    if(id == "interview-filter-btn") {
        jobStatus = "interview";
        allJobs.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        renderInterviewList();
        
    }else if(id == "all-filter-btn") {
        jobStatus = "all";
        allJobs.classList.remove("hidden");
        filteredSection.classList.add("hidden");
        
    }else if(id == "rejected-filter-btn") {
        jobStatus = "rejected";
        allJobs.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        renderRejectedList();
    }
    noJobs();
    updateCounts();
}

// Add event Listener to the Interview and Rejected Btn
mainContainer.addEventListener("click", function (event) {
    
    // Interview btn
    if(event.target.classList.contains("interview-btn")) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector(".companyName").innerText;
        const jobTitle = parentNode.querySelector(".jobTitle").innerText;
        const salary = parentNode.querySelector(".salary").innerText;
        const status = parentNode.querySelector(".status").innerText;
        const description = parentNode.querySelector(".description").innerText;
        const statusElement = parentNode.querySelector(".status");
        parentNode.querySelector(".status").innerText = "INTERVIEW";
        statusElement.classList.remove("rejectedStyle");
        statusElement.classList.add("interviewStyle");

        // create interview job data object
        const jobData = {
            companyName,
            jobTitle,
            salary,
            status: "INTERVIEW",
            description
        }

        // card exit check
        const jobExist = interviewList.find(item => item.companyName === jobData.companyName);
        if(!jobExist) {
            interviewList.push(jobData);  
        }

        // Rejected list filter
        rejectedList = rejectedList.filter(item => item.companyName !== jobData.companyName);

        // status check
        if(jobStatus === "rejected") {
            renderRejectedList();
        }

        noJobs();
        updateCounts();
    }
    
    //Rejected Btn
     else if(event.target.classList.contains("rejected-btn")) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector(".companyName").innerText;
        const jobTitle = parentNode.querySelector(".jobTitle").innerText;
        const salary = parentNode.querySelector(".salary").innerText;
        const status = parentNode.querySelector(".status").innerText;
        const description = parentNode.querySelector(".description").innerText;
        parentNode.querySelector(".status").innerText = "REJECTED";
        const statusElement = parentNode.querySelector(".status");
        statusElement.classList.remove("interviewStyle");
        statusElement.classList.add("rejectedStyle");
        

        // create rejected job data object
        const jobData = {
            companyName,
            jobTitle,
            salary,
            status: "REJECTED",
            description
        }
        // card exit check
        const jobExist = rejectedList.find(item => item.companyName === jobData.companyName);
        if(!jobExist) {
            rejectedList.push(jobData);
        }
        // inteview list filter
        interviewList = interviewList.filter(item => item.companyName !== jobData.companyName);
        // status check
        if(jobStatus === "interview") {
            renderInterviewList();
        }

        noJobs();
        updateCounts();
    }

    // Card delete btn
    else if(event.target.closest(".delete-btn")) {

    const parentNode = event.target.closest(".jobCard");
    const companyName = parentNode.querySelector(".companyName").innerText;
    parentNode.remove();

    interviewList = interviewList.filter(item => item.companyName !== companyName);
    rejectedList = rejectedList.filter(item => item.companyName !== companyName);

    updateCounts();
    noJobs();

    }

})

// create Interview card if card status is interview
function renderInterviewList() {
    filteredSection.innerHTML = "";

    for (let job of interviewList) {
        let div = document.createElement("div");
        div.className = "jobCard space-y-3 md:flex justify-between border border-gray-200 rounded-lg p-6 mt-5 bg-white"
        div.innerHTML = `<div class="space-y-5">
                    <div>
                        <p class="companyName text-[#002C5C] font-bold text-2xl">${job.companyName}</p>
                        <p class="jobTitle text-[#64748B]">${job.jobTitle}</p>
                    </div>

                    <div>
                        <p class="salary text-[#64748B]">${job.salary}</p>
                    </div>

                    <p class="status interviewStyle text-[#002C5C] font-medium bg-[#EEF4FF] px-2 py-3 w-30 rounded-lg text-center">${job.status}</p>
                    <p class="description text-[#323B49]">${job.description}</p>

                    <div class="flex gap-2">
                        <button class="interview-btn  text-green-500 border-2 border-green-500 rounded-lg px-3 py-2">INTERVIEW</button>
                        <button class="rejected-btn  text-red-500 border-2 border-red-500 rounded-lg px-3 py-2">REJECTED</button>
                    </div>
                </div>

                <div class=" w-8 h-8 p-[5px] border border-[#64748B] rounded-full items-center">
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        filteredSection.appendChild(div);
    }

}

// create rejected card if card status is rejected
function renderRejectedList() {

    filteredSection.innerHTML = "";

    for (let job of rejectedList) {
        let div = document.createElement("div");
        div.className = "jobCard flex justify-between border border-gray-200 rounded-lg p-6 mt-5 bg-white"
        div.innerHTML = `<div class="space-y-5">
                    <div>
                        <p class="companyName text-[#002C5C] font-bold text-2xl">${job.companyName}</p>
                        <p class="jobTitle text-[#64748B]">${job.jobTitle}</p>
                    </div>

                    <div>
                        <p class="salary text-[#64748B]">${job.salary}</p>
                    </div>

                    <p class="status rejectedStyle text-[#002C5C] font-medium bg-[#EEF4FF] px-2 py-3 w-30 rounded-lg text-center">${job.status}</p>
                    <p class="description text-[#323B49]">${job.description}</p>

                    <div class="flex gap-2">
                        <button class="interview-btn text-green-500 border-2 border-green-500 rounded-lg px-3 py-2">INTERVIEW</button>
                        <button class="rejected-btn  text-red-500 border-2 border-red-500 rounded-lg px-3 py-2">REJECTED</button>
                    </div>
                </div>

                <div class=" w-8 h-8 p-[5px] border border-[#64748B] rounded-full items-center">
                    <button class="delete-btn"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        filteredSection.appendChild(div);
    }

}