const afterSolvedEffect = (event) => {
  event.target.classList.add('solved');
};

//event listeners
fisrtAssignmentElement.addEventListener('click', firstSolution);
secondAssignmentElement.addEventListener('click', secondSolution);
thirdAssignmentElement.addEventListener('click', thirdSolution);
fourthAssignmentElement.addEventListener('click', fourthSolution);
