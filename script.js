// The provided course information.
  const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

  //try / catch
  
  try{
    let x =5
    
  }catch(error){
    console.error(error)
    console.log("There was an Error somewhere")
  }finally
  {
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.

    // find the learner id by creating a function to find
    let getLearnerId = () =>{
      let learnerId = [];
      for(let i=0; i<LearnerSubmissions.length; i++){
          learnerId.push(LearnerSubmissions[i].learner_id)
      }
      return learnerId
    }
    // store the id to variable 
    const studentsId = getLearnerId() //[125, 125, 125, 132, 132]
    
    // generate id to unique
    const learnersId = [] //[125, 132]
    for(let i=0; i< studentsId.length; i++){
      if(!learnersId.includes(studentsId[i])){
          learnersId.push(studentsId[i])
      }
    }
   
    // console.log(learnersId)
  
    let getLearnerScore = () =>{
      let points_possible_id_1 = AssignmentGroup.assignments[0].points_possible
      let points_possible_id_2 = AssignmentGroup.assignments[1].points_possible
      let learnerScoreId_125 = {}
      let learnerScoreId_132 = {}
      let learnerAvgScoreId_125 ={}
      let learnerAvgScoreId_132 ={}
      let averageGrade_125 = 0
      let averageGrade_132 = 0
      
  
      LearnerSubmissions.forEach(id=>{
        if(id.learner_id == 125){
          if(id.assignment_id ==1){
            learnerScoreId_125.id_1 = id.submission.score
          }else if(id.assignment_id ==2){
            learnerScoreId_125.id_2 = id.submission.score
          }
        }
        if(id.learner_id == 132){
          if(id.assignment_id ==1){
            learnerScoreId_132.id_1 = id.submission.score
          }else if(id.assignment_id ==2){
            learnerScoreId_132.id_2 = id.submission.score
          }
        }
      })
      let assignment_1_due = new Date(AssignmentGroup.assignments[0].due_at)
      let assignment_2_due = new Date(AssignmentGroup.assignments[1].due_at)
      let assignment_3_due = new Date(AssignmentGroup.assignments[2].due_at)
      let learnerSubmitDate1_125
      let learnerSubmitDate2_125
      let learnerSubmitDate3_125
      let learnerSubmitDate1_132
      let learnerSubmitDate2_132
    
      LearnerSubmissions.forEach(sub=>{
        if(sub.learner_id == 125 && sub.assignment_id == 1){
          learnerSubmitDate1_125 = new Date(sub.submission.submitted_at)
        }else if(sub.learner_id == 125 && sub.assignment_id ==2){
          learnerSubmitDate2_125 = new Date(sub.submission.submitted_at)
        }else if(sub.learner_id == 132 && sub.assignment_id ==1){
          learnerSubmitDate1_132 = new Date(sub.submission.submitted_at)
        }else if(sub.learner_id == 132 && sub.assignment_id ==2){
          learnerSubmitDate2_132 = new Date(sub.submission.submitted_at)
        }else if(sub.learner_id == 125 && sub.assignment_id ==3){
          learnerSubmitDate3_125 = new Date(sub.submission.submitted_at)
        }
      })
    

      // find if the submittion paseed the due date
      if(learnerSubmitDate1_125 > assignment_1_due){
        learnerAvgScoreId_125.a1 = (learnerScoreId_125.id_1 - (0.1*points_possible_id_1)) / points_possible_id_1
        learnerScoreId_125.id_1 -= (0.1*points_possible_id_1)
      }else{learnerAvgScoreId_125.a1 = learnerScoreId_125.id_1 / points_possible_id_1}
      if(learnerSubmitDate2_125 > assignment_2_due){
        learnerAvgScoreId_125.a2 = (learnerScoreId_125.id_2 -(0.1*points_possible_id_2)) / points_possible_id_2
        learnerScoreId_125.id_2 -= (0.1*points_possible_id_2)
      }else{learnerAvgScoreId_125.a2 = learnerScoreId_125.id_2 / points_possible_id_2}
      if(learnerSubmitDate1_132 > assignment_1_due){
        learnerAvgScoreId_132.a1 = (learnerScoreId_132.id_1 -(0.1*points_possible_id_1)) / points_possible_id_1
        learnerScoreId_132.id_1 -= (0.1*points_possible_id_1)
      }else{learnerAvgScoreId_132.a1 = learnerScoreId_132.id_1 / points_possible_id_1}
      if(learnerSubmitDate2_132 > assignment_2_due){
        learnerAvgScoreId_132.a2 = (learnerScoreId_132.id_2 -(0.1*points_possible_id_2)) / points_possible_id_2
        learnerScoreId_132.id_2 -= (0.1*points_possible_id_2)
      }else{learnerAvgScoreId_132.a2 = learnerScoreId_132.id_2 / points_possible_id_2}
     
      averageGrade_125 += (learnerScoreId_125.id_1 + learnerScoreId_125.id_2) / (points_possible_id_1 + points_possible_id_2)
      averageGrade_132 += (learnerScoreId_132.id_1 + learnerScoreId_132.id_2) / (points_possible_id_1 + points_possible_id_2)
      const learnerInfo_125 ={
        id: learnersId[0],
        avg: averageGrade_125,
        1: learnerAvgScoreId_125.a1,
        2: learnerAvgScoreId_125.a2
      }
      const learnerInfo_132 ={
        id: learnersId[1],
        avg: averageGrade_132,
        1: learnerAvgScoreId_132.a1,
        2: learnerAvgScoreId_132.a2.toFixed(3)
      }
      console.log(typeof(learnerInfo_132[1]))
      let result = [learnerInfo_125, learnerInfo_132]
      return result
    
    }
  
    const result = getLearnerScore()
    return result    
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  console.log(result)
}



    // const result = [
    //   {
    //     id: 125,
    //     avg: 0.985, // (47 + 150) / (50 + 150)
    //     1: 0.94, // 47 / 50
    //     2: 1.0 // 150 / 150
    //   },
    //   {
    //     id: 132,
    //     avg: 0.82, // (39 + 125) / (50 + 150)
    //     1: 0.78, // 39 / 50
    //     2: 0.833 // late: (140 - 15) / 150
    //   }
    // ];
  
    // return result;
  