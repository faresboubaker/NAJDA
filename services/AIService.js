import axios from 'axios';

const GEMINI_API_KEY = 'AIzaSyAv35XstB93R9jPHK82F0YWL6rNgfxJ7kg';

export const sendEmergencyReport=async({description,image})=>{
  try{
    const response=await axios.post('https://gemini.googleapis.com/v1beta1/assistants:analyzeText',{
      prompt:`صنف نوع الطارئ لهذا النص وقدم تعليمات إسعاف قصيرة: ${description}`,
      maxTokens:200
    },{
      headers:{'Content-Type':'application/json','Authorization':`Bearer ${GEMINI_API_KEY}`}
    });
    const aiText=response.data.outputText||'نزيف / Bleeding';
    let type='نزيف / Bleeding';
    if(aiText.includes('حريق')||aiText.includes('fire')) type='حريق / Fire';
    if(aiText.includes('غرق')||aiText.includes('drowning')) type='غرق / Drowning';
    if(aiText.includes('قلب')||aiText.includes('heart')) type='توقف القلب / Cardiac Arrest';
    if(aiText.includes('حادث')||aiText.includes('accident')) type='حادث مرور / Road Accident';
    return {type,instructions:aiText};
  }catch(error){ console.error('Gemini AI Error:',error); return {type:'نزيف / Bleeding',instructions:'تعليمات افتراضية'}; }
};
