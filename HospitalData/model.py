# from mongoengine import *
# import datetime
# from mongoengine.document import Document

# from mongoengine.fields import DateTimeField, EmailField, IntField, StringField, URLField

# # class Post(Document):
# #     ID = IntField(required=True)
# #     title = StringField(required=True, max_length=200)
# #     content = StringField(required=True)
# #     author = StringField(required=True, max_length=50)
# #     published = DateTimeField(default=datetime.datetime.now)

# class HospitalDetails(Document):
#     hosp_id = StringField(required=True)
#     hosp_name = StringField(required=True)
#     hosp_email = EmailField(required=True)
#     hosp_address = StringField(required=True)
#     hosp_website = URLField(required=True)
#     hosp_specs = StringField(required=True)
#     hosp_mobile = StringField(required=True)
#     hosp_facility = StringField(required=True)
#     hosp_timings = StringField(required=True)
#     doc_list(doc_name,doc_qualification,doc_exp)
#     doc_name = StringField(required=True)
