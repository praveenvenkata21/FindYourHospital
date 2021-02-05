import pymongo 
from pymongo import MongoClient
from mongoengine import *
#from model import Post

#using pymongo
client = MongoClient()
db = client['hospitals'] 
hosp_details = db.hospital_details

hosp_data = {
    'hosp_id':'V12',
    'hosp_name':'Swarup Eye Hospital And Laser Center',
    'hosp_email':'swarupeyehospital@gmail.com',
    'hosp_address':'TB Road, Andhra Pradesh No. 3-1157 , TB Road, Proddatur, Andhra Pradesh',
    'hosp_website':'www.swarupeyehospital.com',
    'hosp_specs':['General Medicine', 'Anaesthesia','Cardiology','ophthalmology'],
    'hosp_mobile':['08564-245533','9231456723'],
    'hosp_facility':['abdominal pain','normal delivery','neurological disorders','general surgery','immunization','vaccination','viral fever'],
    'hosp_timings':'22 hours',
    'doc_list':[{'hosp_id':'V12','doc_id':'VD66','doc_name':'Dr. Y V Swarup K Reddy','doc_qualification':'M.B.B.S., MD','doc_specialization':'Ophthalmologist','doc_experience':'28 years','doc_fee':'250 /-'},
                {'hosp_id':'V12','doc_id':'VD67','doc_name':'Dr. Y V Dhana Lakshmi','doc_qualification':'MD', 'doc_specialization':'Ophthalmologist','doc_experience':'24 years','doc_fee':'450 /-'},
                {'hosp_id':'V12','doc_id':'VD68','doc_name':'Dr.G.Maheshwari','doc_qualification':'M.B.B.S. M.S(Gen)', 'doc_specialization': 'General Medicine','doc_experience':'25 years','doc_fee':'350 /-'},
                {'hosp_id':'V12','doc_id':'VD69','doc_name':'Dr. P.V. Chandhana','doc_qualification':'M.B.B.S., D.C.H','doc_specialization': 'Cardiology','doc_experience':'20 years','doc_fee':'200 /-'},
                {'hosp_id':'V12','doc_id':'VD70','doc_name':'DR. T. Vyshnavi','doc_qualification':'MBBS., M.D', 'doc_specialization':'Cardiology','doc_experience':'21 years','doc_fee':'400 /-'},
                {'hosp_id':'V12','doc_id':'VD71','doc_name':'Dr.K.Rama Krishna ','doc_qualification':'M.S.,F.M.A.S(FELLOW IN SURGICAL GASTROENTEROLOGY)', 'doc_specialization':'Gastroenterology Surgeon','doc_experience':'20 years','doc_fee':'100 /-'}
                ]
}
hosp_details.insert_one(hosp_data)
print("inserted")
client.close()