package usecase

import (
	"context"
	"net/http"
	"strconv"

	"github.com/syafiqparadisam/paymentku/services/transactional/config"
	"github.com/syafiqparadisam/paymentku/services/transactional/domain"
	"github.com/syafiqparadisam/paymentku/services/transactional/dto"
)

func (u *Usecase) GetIncomeData(ctx context.Context, user *dto.XUserData) dto.APIResponse[*[]domain.GetIncomeData] {
	log := config.Log()
	userid, _ := strconv.Atoi(user.UserId)

	data, err := u.graphicRepo.GetIncomeData(ctx, userid)
	if err != nil {
		panic(err)
	}
	response := dto.APIResponse[*[]domain.GetIncomeData]{StatusCode: http.StatusOK, Data: data, Message: "Success"}
	log.Info().Int("Status Code", response.StatusCode).Interface("Data", response.Data).Str("Message", response.Message).Msg("Response logs")

	return response
}


func (u *Usecase) GetOutcomeData(ctx context.Context, user *dto.XUserData) dto.APIResponse[*[]domain.GetIncomeData] {
	log := config.Log()
	userid, _ := strconv.Atoi(user.UserId)

	data, err := u.graphicRepo.GetOutcomeData(ctx, userid)
	if err != nil {
		panic(err)
	}
	response := dto.APIResponse[*[]domain.GetIncomeData]{StatusCode: http.StatusOK, Data: data, Message: "Success"}
	log.Info().Int("Status Code", response.StatusCode).Interface("Data", response.Data).Str("Message", response.Message).Msg("Response logs")

	return response
}
