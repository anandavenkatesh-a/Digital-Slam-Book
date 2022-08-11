



class CommentsClass{
   constructor(){
       const form = document.querySelector('#main-container2 form');
       this.data = [];
       this.submit = form.querySelector('button');
       this.submit.remove();
       this.question_containers = [];
       for(let i = 1;i <= 5;i++) 
       {
         let id = 'q'+i;
         let q_container = document.getElementById(id).parentNode;
         form.removeChild(q_container);
         this.question_containers[i] = q_container;
       }

       this.left = document.querySelector('#left-comment');
       this.right = document.querySelector('#right-comment');
       this.state = 1;

       this.svg = d3.select('#comment-nav > svg')
                    .attr('width',390)
                    .attr('height',63); 
       this.dashedLine = this.svg.append('line')
                      .attr('id','dashed-line')
                      .style("stroke-dasharray", ("6, 3"))
                      .attr('x1',1)
                      .attr('y1',31.5)
                      .attr('x2',390)
                      .attr('y2',31.5)
                      .attr('stroke','grey') 
       this.nav_pos = [-999,-162,-78,9,96,180];                 
       this.navigator = d3.select('#navigator')
                           .attr('height',27)
                           .attr('weight',15)
                           .attr('x',this.nav_pos[1])
                           .attr('y',0);

        for(let i = 1;i <= 5;i++){
             let point = this.svg.append('circle')
                            .attr('id',`point${i}`)
                            .attr('r',6)
                            .attr('fill','#f1eff1')
                            .attr('stroke','grey')
                            .attr('stroke-width',3);
        }                      
        for(let i = 0;i <= 4;i++){
              let point = this.svg.select(`#point${i+1}`)
                              .attr('cx',12+((document.querySelector('#comment-nav').clientWidth - 24)/4)*i)
                              .attr('cy',31.5);
        }
        
        form.appendChild(this.question_containers[1]);
        form.appendChild(this.submit);
        this.svg.select('#point1')
                .attr('fill','#f4b4f7');

        this.right.addEventListener('click',() => {
          this.move(1);
        }); 
        this.left.addEventListener('click',() => {
          this.move(-1);
        });    
        this.submit.addEventListener('click',(event) => {
          const form = document.querySelector('#main-container2 form');
          form.removeChild(form.querySelector(`#q${this.state}`).parentNode);
          for(let i = 1;i <= 5;i++)
          {
             form.appendChild(this.question_containers[i]);               
          } 
        })   
   }
   move(step)
   {
      if(step == 1)
      {
        if(this.state < 5)
        {
          const form = document.querySelector('#main-container2 form');
          this.data[this.state] = form.querySelector(`#q${this.state}`).value;
          this.state += 1;
          this.navigator.attr('x',this.nav_pos[this.state]); 
          this.svg.select(`#point${this.state}`)
                .attr('fill','#f4b4f7');
          this.svg.select(`#point${this.state-1}`)
                .attr('fill','#f1eff1'); 
          let id = 'q'+(this.state-1);
          let prev_q_container = document.getElementById(id).parentNode;  
          form.removeChild(prev_q_container);
          this.submit.remove();
          form.appendChild(this.question_containers[this.state]);
          form.appendChild(this.submit);
        }
      }
      else if(step == -1)
      {
        if(this.state > 1)
        {
          const form = document.querySelector('#main-container2 form');
          this.data[this.state] = form.querySelector(`#q${this.state}`).value;
          this.state -= 1;
          this.navigator.attr('x',this.nav_pos[this.state]); 
          this.svg.select(`#point${this.state}`)
                .attr('fill','#f4b4f7'); 
          this.svg.select(`#point${this.state+1}`)
                 .attr('fill','#f1eff1');
          let id = 'q'+(this.state+1);
          let prev_q_container = document.getElementById(id).parentNode;  
          form.removeChild(prev_q_container);
          this.submit.remove();
          form.appendChild(this.question_containers[this.state]);
          form.appendChild(this.submit);                        
        }
      }
   }
};

// const CommentSection = document.querySelector('#main-container2');
// const form = CommentSection.querySelector('form');

// question_containers = [];
// for(let i = 1;i <= 5;i++)
// {
//     let id = 'q'+i;
//     let q_container = form.querySelector('#'+id).parentNode;
//     form.removeChild(q_container);
//     question_containers[i] = q_container;
// }

// console.log(question_containers);
// const svg = d3.select('#comment-nav')
//   .append('svg')
//   .attr('width',360)
//   .attr('height',42); 
// const dashedLine = svg.append('line')
//                       .attr('id','dashed-line')
//                       .style("stroke-dasharray", ("6, 3"))
//                       .attr('x1',1)
//                       .attr('y1',21)
//                       .attr('x2',360)
//                       .attr('y2',21)
//                       .attr('stroke','grey')   


// for(let i = 1;i <= 5;i++){
//     let point = svg.append('circle')
//                    .attr('id',`point${i}`)
//                    .attr('r',6)
//                    .attr('fill','black')
// }                      
// for(let i = 0;i <= 4;i++){
//     let point = svg.select(`#point${i+1}`)
//                    .attr('cx',12+((document.querySelector('#comment-nav').clientWidth - 24)/4)*i)
//                    .attr('cy',21);
// }

let comments = new CommentsClass();
