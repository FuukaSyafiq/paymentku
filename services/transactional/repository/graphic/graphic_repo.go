package graphic_repo

import (
	"context"
	"database/sql"

	"github.com/syafiqparadisam/paymentku/services/transactional/config"
	"github.com/syafiqparadisam/paymentku/services/transactional/domain"
)

type GraphicRepository struct {
	mysql *config.MySqlStore
}

func NewGraphicRepository(mysql *config.MySqlStore) *GraphicRepository {
	return &GraphicRepository{mysql: mysql}
}

type GraphicInterface interface {
	StartTransaction(ctx context.Context) (*sql.Tx, error)
	GetIncomeData(ctx context.Context, userID int) (*[]domain.GetIncomeData, error)
	GetOutcomeData(ctx context.Context, userID int) (*[]domain.GetIncomeData, error)
}

func (t *GraphicRepository) StartTransaction(ctx context.Context) (*sql.Tx, error) {
	return t.mysql.Db.BeginTx(ctx, &sql.TxOptions{Isolation: sql.LevelReadCommitted})
}

func (t *GraphicRepository) GetIncomeData(ctx context.Context, userID int) (*[]domain.GetIncomeData, error) {
	query := `
		SELECT DATE(created_at) as date, SUM(amount) as total_amount
		FROM history_topup
		WHERE userId = ?
		GROUP BY DATE(created_at)
		ORDER BY DATE(created_at) ASC
	`

	rows, err := t.mysql.Db.QueryContext(ctx, query, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var results []domain.GetIncomeData
	for rows.Next() {
		var data domain.GetIncomeData
		if err := rows.Scan(&data.Date, &data.Amount); err != nil {
			return nil, err
		}
		results = append(results, data)
	}

	return &results, nil
}


func (t *GraphicRepository) GetOutcomeData(ctx context.Context, userID int) (*[]domain.GetIncomeData, error) {
	query := `
		SELECT DATE(created_at) as date, SUM(amount) as total_amount
		FROM history_transfer
		WHERE userId = ?
		GROUP BY DATE(created_at)
		ORDER BY DATE(created_at) ASC
	`

	rows, err := t.mysql.Db.QueryContext(ctx, query, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var results []domain.GetIncomeData
	for rows.Next() {
		var data domain.GetIncomeData
		if err := rows.Scan(&data.Date, &data.Amount); err != nil {
			return nil, err
		}
		results = append(results, data)
	}

	return &results, nil
}
