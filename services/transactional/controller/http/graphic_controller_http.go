package controller_http

import (
	"context"
	"net/http"
	"time"

	"github.com/syafiqparadisam/paymentku/services/transactional/dto"
)

func (c *ControllerHTTP) HandleIncomeData(w http.ResponseWriter, r *http.Request, user *dto.XUserData) error {
	ctx, cancel := context.WithTimeout(context.Background(), 20*time.Second)
	defer cancel()

	result := c.usecase.GetIncomeData(ctx, user)
	return WriteJSON(w, result.StatusCode, result)
}


func (c *ControllerHTTP) HandleOutcomeData(w http.ResponseWriter, r *http.Request, user *dto.XUserData) error {
	ctx, cancel := context.WithTimeout(context.Background(), 20*time.Second)
	defer cancel()

	result := c.usecase.GetOutcomeData(ctx, user)
	return WriteJSON(w, result.StatusCode, result)
}
