class CreateEntries < ActiveRecord::Migration[5.0]
  def change
    create_table :entries do |t|
      t.string :name
      t.boolean :winner

      t.timestamps
    end
  end
end
