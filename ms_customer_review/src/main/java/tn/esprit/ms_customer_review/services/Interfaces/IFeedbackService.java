package tn.esprit.ms_customer_review.services.Interfaces;

import tn.esprit.ms_customer_review.entities.Feedback;

import java.util.List;
import java.util.Optional;

public interface IFeedbackService {

    public Feedback addFeedback(Feedback feedback);

    public Feedback changeTicketStatus(int id, Feedback newfeedback);

    public Feedback RespondTOReview(int id, Feedback newfeedback);

    public List<Feedback> all_feedbacks();
    public boolean DeleteFeedback(int id);
}
