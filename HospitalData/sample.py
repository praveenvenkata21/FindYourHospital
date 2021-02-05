data = {
  0: {"name": "hotel1",
         "overall_rating": 4, 
         "reviews": [{"rating": 5, "review" : "best place ever"},
                     {"rating": 1, "review" : "toilet was blocked"}],
        },
  1:  {"name": "hotel2",
         "overall_rating": 4,
         "reviews": [{"rating":4, "review" : "welly nice"},
                      {"rating":3, "review" : "I couldn't bring my dog"}],
        }
    } 

ratings = []
reviews = []
for hotel in data.values():
    for review in hotel['reviews']:
        print(review['review']) 
        print(review['rating'])

