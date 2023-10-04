package tn.esprit.ms_customer_review.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.ms_customer_review.entities.Feedback;
import tn.esprit.ms_customer_review.services.FeedbackServiceImp;

import java.util.List;

@RestController
@RequestMapping(value = "/api/feedback")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class FeedbackController {

    @Autowired()
    private FeedbackServiceImp _feedbackServiceImp;

    @PostMapping()
    public ResponseEntity<Feedback> add(@RequestBody() Feedback feedback){
        return new ResponseEntity<>(_feedbackServiceImp.addFeedback(feedback), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Feedback> update(@PathVariable("id") int id,@RequestBody() Feedback feedback){
        return new ResponseEntity<>(_feedbackServiceImp.updateFeedback(id,feedback),HttpStatus.OK);
    }

    @GetMapping (value = "/all")
    public ResponseEntity<List<Feedback>> getAll(){
        return new ResponseEntity<>(_feedbackServiceImp.all_feedbacks(), HttpStatus.OK);
    }

    @DeleteMapping (value = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> delete(@PathVariable("id") int id){
        return new ResponseEntity<>(_feedbackServiceImp.DeleteFeedback(id),HttpStatus.OK);
    }
}
