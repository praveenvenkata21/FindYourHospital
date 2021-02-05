from mongoengine.connection import connect
import pymongo 
from pymongo import MongoClient
from mongoengine import *
#from model import Post

#using pymongo
client = MongoClient()
db = client['hospitals'] 
hosp_details = db.hospital_details 

hosp_data = { 
    'hosp_id':'H001',
    'hosp_name':'Sri Padmavathi Multi specialty Hospital',
    'hosp_email':'Sripadmavathimultispeciality@gmail.com',
    'hosp_address':' 6-1-12e, R.S Gardens,Near Sri Raghavendra Swamy Mutt,Old Maternity Hospital road,Tirupati',
    'hosp_website':'http://sripadmavathimultispeciality.com/',
    'hosp_specs':['Cardiology', 'OBG','Orthopedics','Neuro Surgery', 'General Surgery','ENT','Pulmanology'],
    'hosp_mobile':['0877-2230331','0877-2231599'],
    'hosp_facility':['Clinical Services','Laboratory Services','ENMG','Stroke Care ICU',
                        '24 Hour Pharmacy','Ultra Sound Scanning','In-House Spiral CT Scan',
                        'In-House Digital X-ray','Pharmacy'],
    'hosp_timings':'24 Hours',
    'doc_list':[{'doc_id':'D001','doc_name':'Dr.G.Subramanyam','doc_qualification':'M.D,D.M (Cardiology)'},
                {'doc_id':'D002','doc_name':'Dr.P.Suresh','doc_qualification':'M.D (General Medicine)'},
                {'doc_id':'D003','doc_name':'Dr.Sunil Reddy','doc_qualification':' M.D (Anesthesia)'},
                {'doc_id':'D004','doc_name':'Dr.Ajay Babu','doc_qualification':'M.S, M.C.H (Neuro Surgery)'},
                {'doc_id':'D005','doc_name':'Dr.V.Vijay Kumar Reddy','doc_qualification':'M.S, M.C.H (Urology)'},
                {'doc_id':'D006','doc_name':'Dr.J.Vara Prasad','doc_qualification':'M.D (Chest & TB)'},
                {'doc_id':'D007','doc_name':'Dr.Sudheer Raya','doc_qualification':'M.D (Radiology)'}
                ]
}
hosp_details.insert_one(hosp_data)
print("inserted")
client.close() 
# posts = db.posts
# post_data = {
#     'title': 'Python and MongoDB',
#     'content': 'PyMongo is fun, you guys',
#     'author': 'Scott'
# }
# result = posts.insert_one(post_data)
# print('One post: {0}'.format(result.inserted_id)) 

# post_1 = {
#     'title': 'Python and MongoDB',
#     'content': 'PyMongo is fun, you guys',
#     'author': 'Scott'
# }
# post_2 = {
#     'title': 'Virtual Environments',
#     'content': 'Use virtual environments, you guys',
#     'author': 'Scott'
# }
# post_3 = {
#     'title': 'Learning Python',
#     'content': 'Learn Python, it is easy',
#     'author': 'Bill'
# }
# new_result = posts.insert_many([post_1, post_2, post_3])
# print('Multiple posts: {0}'.format(new_result.inserted_ids))


# using mongoengine

#connect('test_sample1', host='localhost', port=27017)

#connect('hospitals',host='localhost', port=27017 )




# post_1 = Post(
#     ID =Post.objects.count() + 1,
#     title='Sample Post',
#     content='Some engaging content',
#     author='Scott'
# )
# post_1.save()       # This will perform an insert
# print(post_1.title) 

