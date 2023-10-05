package tn.esprit.ms_customer_review.services;

import com.sun.org.apache.bcel.internal.generic.ACONST_NULL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.ms_customer_review.entities.Feedback;
import tn.esprit.ms_customer_review.entities.enums.TicketStatus;
import tn.esprit.ms_customer_review.repositories.FeedbackRepository;
import tn.esprit.ms_customer_review.services.Interfaces.IFeedbackService;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackServiceImp implements IFeedbackService {

    @Autowired
    private FeedbackRepository _feedbackrepo;


    @Override
    public Feedback addFeedback(Feedback feedback) {

        Feedback newfeed = new Feedback();
        newfeed.setTitle(feedback.getTitle());
        newfeed.setServiceType(feedback.getServiceType());
        newfeed.setDescription(feedback.getDescription());
        newfeed.setTicketStatus(TicketStatus.pending);
        newfeed.setIs_approved(false);

        return this._feedbackrepo.save(newfeed);
    }

    @Override
    public Feedback changeTicketStatus(int id, Feedback newfeedback) {
        if (this._feedbackrepo.findById(id).isPresent()) {
            Feedback existingFeedback = this._feedbackrepo.findById(id).get();

            existingFeedback.setTicketStatus(TicketStatus.open);
            existingFeedback.setIs_approved(true);

            return this._feedbackrepo.save(existingFeedback);
        } else {
            return null;
        }
    }


    @Override
    public Feedback RespondTOReview(int id, Feedback newfeedback) {
        if (this._feedbackrepo.findById(id).isPresent()) {
            Feedback existingFeedback = this._feedbackrepo.findById(id).get();

            existingFeedback.setResponse_from_management(newfeedback.getResponse_from_management());
            existingFeedback.setTicketStatus(TicketStatus.closed);

            return this._feedbackrepo.save(existingFeedback);
        } else {
            return null;
        }
    }


    @Override
    public List<Feedback> all_feedbacks() {
        return this._feedbackrepo.findAll();
    }

    @Override
    public boolean DeleteFeedback(int id) {
        if (this._feedbackrepo.findById(id).isPresent()) {
            this._feedbackrepo.deleteById(id);
            return true;
        }

        return false;
    }
}
