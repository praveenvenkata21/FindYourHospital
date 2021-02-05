from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['MONGO_DBNAME']='hospitals'
app.config['MONGO_URI']='mongodb://localhost:27017/hospitals'

mongo=PyMongo(app)


@app.route('/details/<spec>',methods=['GET'])

def get_all_hospitals(spec):
    hospitals = mongo.db.hospital_details
    print(spec)
    doc = hospitals.find({'hosp_specs':spec},{'_id': 0}) 
    print(doc)
    output=[]  
   
    for s in doc:
        output.append({ 'hosp_id':s.get('hosp_id'),'hosp_name' : s.get('hosp_name'),'hosp_email':s.get('hosp_email'),'hosp_address':s.get('hosp_address'),
        'hosp_website':s.get('hosp_website'),
        'hosp_specs':s.get('hosp_specs'),
        'hosp_mobile':s.get('hosp_mobile'),
        'hosp_facility':s.get('hosp_facility'),
        'hosp_timings':s.get('hosp_timings')
       })
   
    return jsonify({'hospitallist' : output})

@app.route('/doctors/<id>',methods=['GET'])

def get_all_doctors(id):
    hospitals = mongo.db.hospital_details
    print(id)
    doc = hospitals.find({'hosp_id':id},{'_id': 0})
    print(doc)
    output=[]
   
    for data in doc:
       output.append({'doc_list':data.get('doc_list')}) 
        
    return jsonify({'doclist' : output})

if __name__== '__main__':
  app.run(debug=True)