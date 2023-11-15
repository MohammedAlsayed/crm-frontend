function dev_plan_action(){
    return ['Introduce New Product', 'Increase Consumption', 'Reorder']
}
function dev_plan_status(){
    return ['On Process', 'Success', 'Failure']
}
function department(){
    return ['Accounting','Anesthesia','Cardiology','Cath Lab','CCU','Contracts & Tender Department','Dermatology','Endoscopy','Gastroenterologist','Gynae-Oncology','Hematology','Home health care','Intraventianal RAD','Laboratory','Medical supplies','NICU','Nursing','OR','Pharmacy','PICU','Planning','Tender','Urology','ICU', 'OB/GYN', 'IVF', 'Pulmonology', 'Purchasing', 'Radiology', 'Thoracic Surgery', 'ER', 'Internal Medicine', 'Vascular']
}

export {dev_plan_action, dev_plan_status, department}