let interviewList = [];
let rejectedList = [];



let total = document.getElementById("total")
let interviewCount = document.getElementById("interviewCount")
let rejectedCount = document.getElementById("rejectedCount")

const allJobs = document.getElementById("all-job-list")
const mainContainer = document.querySelector('main')


const allFilterBtn = document.getElementById("all-filter-btn")
const interviewFilterBtn = document.getElementById("interview-filter-btn")
const rejectedFilterBtn = document.getElementById("rejected-filter-btn")


function updateCounts() {
    total.innerText = allJobs.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

updateCounts();



function toggle(id) {
    allFilterBtn.classList.remove("text-white", "bg-[#3B82F6]");
    interviewFilterBtn.classList.remove("text-white", "bg-[#3B82F6]");
    rejectedFilterBtn.classList.remove("text-white", "bg-[#3B82F6]");


    allFilterBtn.classList.add("text-[#64748B]", "bg-white");
    interviewFilterBtn.classList.add("text-[#64748B]", "bg-white");
    rejectedFilterBtn.classList.add("text-[#64748B]", "bg-white");


    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.remove("text-[#64748B]", "bg-white");
    selectedBtn.classList.add("bg-[#3B82F6]", "text-white");

    
    
}