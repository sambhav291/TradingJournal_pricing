import React from 'react'
import './pricing.css'
import { useNavigate } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';


function Pricing() {
   
   const navigate=useNavigate();

   const handlePaymentClick = (event) => {
      event.preventDefault();
      console.log("Payment Clicked");
      navigate("/payment");
      
   };

  return (

    <div>
        <div className="heading">
            
            <div className="jura-title title">Pricing & Plans</div>
        </div>
        <div className="sub-title jura-title">Transparent pricing that scales with premium features and call volume.</div>

        <div className='card-container'>

        <div className="card-display">
            <div className="card-type1"> 
              <div className='card-header'>
                 <div className='circle1'></div> <div className='gridhead-text'>Free forever</div> 
              </div>
              <div className='card-desc'>The ultimate project kickstart</div>
              <div className='price-box'>   <div className='price-rate'>₹0</div> <div className='per-month'>/month</div>   </div>
              <div className='price-desc'>No credit card required</div>
              <a href="www.google.com" className='card-btn1'>Try it for free</a>
              <div className='card-details-header'>What's included:</div>
              <div className='card-details-box'>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>10 connected accounts</div> </div>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>2,000 unified API calls</div> </div>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>Basic integration</div> </div>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>Passthrough API</div> </div>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>Modem SDKs</div> </div>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>Community support</div> </div>
              </div>
            </div>

            <div className="card-type2"> 
              <div className='card-header'>
                 <div className='circle2'></div> <div className='gridhead-text'>Ridiculously cheap</div> 
              </div>
              <div className='card-desc'>The plan to unlock more customers</div>
              <div className='price-box'>   <div className='price-rate'>₹59</div> <div className='per-month'>/month</div>   </div>
              <div className='price-desc'>Billed monthly</div>
              <a href="www.google.com" onClick={handlePaymentClick} className='card-btn2'>Get started</a> 
              <div className='card-details-header'>Everything in Free, plus:</div>
              <div className='card-details-box'>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>Unlimited connected accounts</div> </div>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>50,000 unified API calls</div> </div>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>3 Premium integration</div> </div>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>Standard API pricing</div> </div>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>Onboarding Support</div> </div>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>Dedicated Slack channel</div> </div>
              </div>
            </div>

            <div className="card-type1"> 
              <div className='card-header'>
                 <div className='circle3'></div> <div className='gridhead-text'>Growth</div> 
              </div>
              <div className='card-desc'>For teams that are scaling up</div>
              <div className='price-box'>   <div className='price-rate'>₹99</div> <div className='per-month'>/month</div>   </div>
              <div className='price-desc'>Billed monthly</div>
              <a href="www.google.com" className='card-btn1'>Contact sales</a>
              <div className='card-details-header'>Everything in Ridiculous, plus:</div>
              <div className='card-details-box'>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>Unlimited Unified API calls</div> </div>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>Unlimited Premium integrations</div> </div>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>White labeling</div> </div>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>Volume API pricing</div> </div>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>Roadmap request priority</div> </div>
              <div className='card-details'>  <img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-157'/> <div className='details-txt'>Dedicated account manager</div> </div>
              </div>
            </div>
          
        </div>

        </div>


        <div className="jura-title title2">Compare plans and features </div>
        <div className="sub-title jura-title">Choose the plan that's right for your business</div>

        <div class="table-container">
             <div class="grid-table">
                <div class="feature-name"></div>
                <div class="grid-header"> 
                   <div className='gridhead'> 
                        <div className='circle1'></div> <div className='gridhead-text'>Free</div>
                    </div> 
                         <a href="www.google.com" className='gridbtn1'>Try it free</a>  
                </div>
                <div class="grid-header">
                    <div className='gridhead'> 
                       <div className='circle2'></div> <div className='gridhead-text'>Ridiculous</div>
                    </div>  
                       <a href="www.google.com" onClick={handlePaymentClick} className='gridbtn2'>Get started</a>  
                </div>
                <div class="grid-header"> 
                   <div className='gridhead'>  
                       <div className='circle3'></div> <div className='gridhead-text'>Growth</div>
                    </div>  
                       <a href="www.google.com" onClick={handlePaymentClick} className='gridbtn3'>Get started</a> 
                 </div>
                <div class="grid-header"> 
                   <div className='gridhead'> 
                        <div className='circle4'></div> <div className='gridhead-text'>Enterprise</div>
                    </div>  
                         <a href="www.google.com" className='gridbtn4'>Contact sales</a> 
                 </div>

                 <div className='category'> <div className='Product-icon'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650e093f72847c59a06c9fd_shape-circle%202.svg" alt="" className='img-158' /></div>Unified</div>

                 <div className='grid-feature'>API Calls</div>
                 <div className='grid-items'>2,000</div>
                 <div className='grid-items'>50,000</div>
                 <div className='grid-items'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650bfb8436abe1c15f5f5d3_infinity%20icon.svg" alt="" className='img-155'/></div>
                 <div className='grid-items'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650bfb8436abe1c15f5f5d3_infinity%20icon.svg" alt="" className='img-155'/></div>

                 <div className='grid-feature'>Pricing Type</div>
                 <div className='grid-items'>Free</div>
                 <div className='grid-items'>Standard</div>
                 <div className='grid-items'>Volume</div>
                 <div className='grid-items'>Custom</div>

                 <div className='grid-feature'>Common Models</div>
                 <div className='grid-items '><div className='circle1'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c3b29b8ca1c6dc5a972c_check%20black.svg" alt="" className='img-156' /></div></div>
                 <div className='grid-items '><div className='circle2'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle3'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle4'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>

                 <div className='grid-feature'>Premium Integration</div>
                 <div className='grid-items '>-</div>
                 <div className='grid-items '>3</div>
                 <div className='grid-items'>25</div>
                 <div className='grid-items'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650bfb8436abe1c15f5f5d3_infinity%20icon.svg" alt="" className='img-155'/></div>

                 <div className='grid-feature'>SDKs</div>
                 <div className='grid-items '><div className='circle1'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c3b29b8ca1c6dc5a972c_check%20black.svg" alt="" className='img-156' /></div></div>
                 <div className='grid-items '><div className='circle2'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle3'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle4'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>

                 <div className='grid-feature'>Passthrough API</div>
                 <div className='grid-items '><div className='circle1'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c3b29b8ca1c6dc5a972c_check%20black.svg" alt="" className='img-156' /></div></div>
                 <div className='grid-items '><div className='circle2'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle3'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle4'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>


                 <div className='category'> <div className='Product-icon'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650e1056076fe517053b56f_box%201.svg" alt="" className='img-158' /></div>AuthKit</div>

                 <div className='grid-feature'>Community Support</div>
                 <div className='grid-items '><div className='circle1'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c3b29b8ca1c6dc5a972c_check%20black.svg" alt="" className='img-156' /></div></div>
                 <div className='grid-items '><div className='circle2'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle3'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle4'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>

                 <div className='grid-feature'>White labeling</div>
                 <div className='grid-items '>-</div>
                 <div className='grid-items '><div className='circle2'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'>-</div>
                 <div className='grid-items'><div className='circle4'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>

                 <div className='grid-feature'>Audit Logs</div>
                 <div className='grid-items '>-</div>
                 <div className='grid-items '><div className='circle2'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle3'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle4'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>


                 <div className='category'> <div className='Product-icon'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650e112f105355dad29cae5_shield-checkered%201.svg" alt="" className='img-158' /></div>Security</div>

                 <div className='grid-feature'>Community Support</div>
                 <div className='grid-items '><div className='circle1'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c3b29b8ca1c6dc5a972c_check%20black.svg" alt="" className='img-156' /></div></div>
                 <div className='grid-items '><div className='circle2'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle3'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle4'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>

                 <div className='grid-feature'>White labeling</div>
                 <div className='grid-items '>-</div>
                 <div className='grid-items '><div className='circle2'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'>-</div>
                 <div className='grid-items'><div className='circle4'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>

                 <div className='grid-feature'>Audit Logs</div>
                 <div className='grid-items '>-</div>
                 <div className='grid-items '><div className='circle2'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle3'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle4'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>


                 <div className='category'> <div className='Product-icon'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650e11e979d1cbb978374f9_headphones%201.svg" alt="" className='img-158' /></div>Support</div>

                 <div className='grid-feature'>Community Support</div>
                 <div className='grid-items '><div className='circle1'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c3b29b8ca1c6dc5a972c_check%20black.svg" alt="" className='img-156' /></div></div>
                 <div className='grid-items '><div className='circle2'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle3'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle4'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>

                 <div className='grid-feature'>White labeling</div>
                 <div className='grid-items '>-</div>
                 <div className='grid-items '><div className='circle2'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'>-</div>
                 <div className='grid-items'><div className='circle4'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>

                 <div className='grid-feature'>Audit Logs</div>
                 <div className='grid-items '>-</div>
                 <div className='grid-items '><div className='circle2'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle3'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 <div className='grid-items'><div className='circle4'><img src="https://cdn.prod.website-files.com/5f6b97302bb70b93e591d51f/6650c415eced3ea9aefef5be_Check%20white.svg" alt="" className='img-156'  /></div></div>
                 
             </div>
        </div>


        <div className='faq-section'>
         <div className='faq-title'>FAQs</div>

         <div className='accordian'>

            <div className='accordian-item' id='Q1'>
               <a className='accordian-link' href="#Q1">
                  This is question 1
                  <IonIcon icon={chevronDownOutline} className='chevronDown'/>
                  <IonIcon icon={chevronUpOutline} className='chevronUp'/>
               </a>
               <div className='answer'>
                 <p> answer Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia dicta maiores nostrum nobis accusamus voluptatem, explicabo ea perspiciatis architecto quae inventore ut non sunt alias similique suscipit unde rem.</p>
               </div>
            </div>

            <div className='accordian-item' id='Q2'>
               <a className='accordian-link' href="#Q2">
                  This is question 2
                  <IonIcon icon={chevronDownOutline} className='chevronDown'/>
                  <IonIcon icon={chevronUpOutline} className='chevronUp'/>
               </a>
               <div className='answer'>
                 <p> answer Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia dicta maiores nostrum nobis accusamus voluptatem, explicabo ea perspiciatis architecto quae inventore ut non sunt alias similique suscipit unde rem.</p>
               </div>
            </div>

            <div className='accordian-item' id='Q3'>
               <a className='accordian-link' href="#Q3">
                  This is question 3
                  <IonIcon icon={chevronDownOutline} className='chevronDown'/>
                  <IonIcon icon={chevronUpOutline} className='chevronUp'/>
               </a>
               <div className='answer'>
                 <p> answer Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia dicta maiores nostrum nobis accusamus voluptatem, explicabo ea perspiciatis architecto quae inventore ut non sunt alias similique suscipit unde rem.</p>
               </div>
            </div>

            <div className='accordian-item' id='Q4'>
               <a className='accordian-link' href="#Q4">
                  This is question 4
                  <IonIcon icon={chevronDownOutline} className='chevronDown'/>
                  <IonIcon icon={chevronUpOutline} className='chevronUp'/>
               </a>
               <div className='answer'>
                 <p> answer Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia dicta maiores nostrum nobis accusamus voluptatem, explicabo ea perspiciatis architecto quae inventore ut non sunt alias similique suscipit unde rem.</p>
               </div>
            </div>

            <div className='accordian-item' id='Q5'>
               <a className='accordian-link' href="#Q5">
                  This is question 5
                  <IonIcon icon={chevronDownOutline} className='chevronDown'/>
                  <IonIcon icon={chevronUpOutline} className='chevronUp'/>
               </a>
               <div className='answer'>
                 <p> answer Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia dicta maiores nostrum nobis accusamus voluptatem, explicabo ea perspiciatis architecto quae inventore ut non sunt alias similique suscipit unde rem.</p>
               </div>
            </div>

            <div className='accordian-item' id='Q6'>
               <a className='accordian-link' href="#Q6">
                  This is question 6
                  <IonIcon icon={chevronDownOutline} className='chevronDown'/>
                  <IonIcon icon={chevronUpOutline} className='chevronUp'/>
               </a>
               <div className='answer'>
                 <p> answer Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia dicta maiores nostrum nobis accusamus voluptatem, explicabo ea perspiciatis architecto quae inventore ut non sunt alias similique suscipit unde rem.</p>
               </div>
            </div>

         </div>
      

        </div>
      
  </div>
  )
}

export default Pricing
