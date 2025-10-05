package com.chaitanya.food_ordering.exception;

import com.chaitanya.food_ordering.response.ApiResponse;
import org.apache.coyote.BadRequestException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ApiException.class)
    public ResponseEntity<ApiResponse<Object>> parseApiException(ApiException ex){
        return new ResponseEntity<>(
                new ApiResponse<>(
                        false,ex.getMessage(),null,ex.getStatus().value()
                ),
                ex.getStatus()
        );
    }

    @ExceptionHandler(NoHandlerFoundException.class)
    public ResponseEntity<ApiResponse<Object>> parseApiException(NoHandlerFoundException ex){
        return new ResponseEntity<>(
                new ApiResponse<>(
                        false,ex.getMessage(),null,HttpStatus.NOT_FOUND.value()
                ),
                HttpStatus.NOT_FOUND
        );
    }

    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ApiResponse<Object>> parseApiException(BadRequestException ex){
        return new ResponseEntity<>(
                new ApiResponse<>(
                        false,ex.getMessage(),null,HttpStatus.BAD_REQUEST.value()
                ),
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<Object>> parseAllExceptions(Exception ex){
        System.out.println(ex);
        return new ResponseEntity<>(new ApiResponse<>(false, ex.getMessage(), null,
                HttpStatus.INTERNAL_SERVER_ERROR.value()),
                HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
